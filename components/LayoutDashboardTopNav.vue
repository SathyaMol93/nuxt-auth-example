<template>
  <div
    id="dashboard-top-nav"
    class="z-50 max-h-16 h-16 w-full flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white px-5 justify-between items-center sticky top-0 border-b dark:border-gray-700"
  >
    <button @click="openCloseSideBar(!isSideBarOpen)">
      <Icon name="heroicons:bars-3" class="w-8 h-8" />
    </button>
    <div class="flex gap-3 h-full items-center">
      <div class="flex gap-2 items-center">
        <Icon name="heroicons:sun" class="w-5 h-5" />
        <Switch
          v-model="enabled"
          :class="enabled ? 'bg-blue-600' : 'bg-gray-100'"
          class="relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="enabled ? 'translate-x-6' : 'translate-x-0'"
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
        <Icon name="heroicons:moon" class="w-5 h-5" />
      </div>
      <Menu as="div" class="relative inline-block text-left w-8 h-8">
        <MenuButton
          class="w-8 h-8 justify-center rounded-full bg-blue-700 text-white text-xl font-semi"
        >
          <NuxtImg
            class="rounded-full w-full h-full"
            v-if="
              userState &&
              userState.user_metadata &&
              userState.user_metadata.avatar_url
            "
            :src="userState.user_metadata['avatar_url']"
          />
          <p
            v-else-if="
              userState &&
              userState.user_metadata &&
              userState.user_metadata.full_name
            "
          >
            {{ getInitials(userState.user_metadata["full_name"]) }}
          </p>
          <p v-else></p>
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-white rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-lg ring-1 ring-black/10 dark:ring-white/20 focus:outline-none"
          >
            <div class="px-1 py-1 flex flex-col space-y-3">
              <p
                class="text-xl font-semibold border-b p-1"
                v-if="
                  userState &&
                  userState.user_metadata &&
                  userState.user_metadata.full_name
                "
              >
                {{ userState.user_metadata["full_name"] }}
              </p>
              <MenuItem as="template" v-slot="{ active }">
                <NuxtLink
                  to="/dashboard/profile"
                  class="rounded-md p-1 text-left"
                  :class="{
                    'bg-gray-100 dark:bg-gray-700 ': active,
                  }"
                >
                  Profile
                </NuxtLink>
              </MenuItem>
              <MenuItem as="template" v-slot="{ active }">
                <button
                  class="rounded-md p-1 text-left"
                  :class="{
                    'bg-gray-100 dark:bg-gray-700': active,
                  }"
                  @click="signOut()"
                >
                  Signout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";
import useUserStore from "~/stores/user";
const router = useRouter();
const supabase = useSupabaseClient();

let isSideBarOpen: boolean = true;

const enabled: Ref<Boolean> = ref(false);
const emit = defineEmits(["submit"]);

function openCloseSideBar(state: boolean) {
  isSideBarOpen = state;
  emit("submit", state);
}

const userState = computed(() => useUserStore().$state.user);

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
    enabled.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    enabled.value = false;
  }
});

watch(enabled, async (newEnabled: boolean, oldEnabled: boolean) => {
  if (newEnabled) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
});

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  router.push({ path: "/login" });
};

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  return firstName.charAt(0) + (lastName ? lastName.charAt(0) : "");
};
</script>

<style scoped></style>
