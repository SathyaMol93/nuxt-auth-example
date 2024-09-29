<template>
  <div class="w-full">
    <nav
      class="relative z-0 flex border rounded-xl overflow-hidden dark:border-gray-700"
      aria-label="Tabs"
      role="tablist"
    >
      <button
        type="button"
        class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-blue-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
        id="bar-with-underline-item-1"
        data-hs-tab="#bar-with-underline-1"
        aria-controls="bar-with-underline-1"
        role="tab"
      >
        Information
      </button>

      <button
        type="button"
        class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-blue-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
        id="bar-with-underline-item-2"
        data-hs-tab="#bar-with-underline-2"
        aria-controls="bar-with-underline-2"
        role="tab"
      >
        Creadentials
      </button>
    </nav>

    <div
      class="mt-3 border rounded-xl dark:border-gray-700 p-2 mb-auto bg-white dark:bg-gray-800"
    >
      <div
        id="bar-with-underline-1"
        role="tabpanel"
        aria-labelledby="bar-with-underline-item-1"
      >
        <form class="w-full" @submit.prevent="update()">
          <div class="flex gap-3 items-center">
            <div class="relative w-72 h-60">
              <NuxtImg
                class="w-72 h-60 rounded-xl object-cover"
                :src="image"
                alt="profile pic"
              />
              <input
                v-if="isEdit"
                class="hidden"
                id="profile-pic-input"
                type="file"
                @change="upload($event)"
              />
              <label
                v-if="isEdit"
                class="w-8 h-8 flex justify-center items-center absolute -bottom-1 -right-2 z-50 rounded-full bg-gray-700/70 hover:bg-blue-700/70"
                for="profile-pic-input"
              >
                <Icon name="uil:band-aid" class="w-4 h-4" />
              </label>
            </div>
            <div class="w-full h-60 flex flex-col justify-between">
              <div class="w-full flex flex-col gap-2">
                <div class="flex gap-2">
                  <div class="w-full">
                    <div class="relative">
                      <input
                        type="text"
                        :disabled="!isEdit"
                        v-model="firstName"
                        id="hs-floating-input-fullname"
                        class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="Your Full Name"
                      />
                      <label
                        for="hs-floating-input-fullname"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >First Name</label
                      >
                    </div>
                  </div>
                  <div class="w-full">
                    <div class="relative">
                      <input
                        type="text"
                        :disabled="!isEdit"
                        v-model="lastName"
                        id="hs-floating-input-fullname"
                        class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="Your Full Name"
                      />
                      <label
                        for="hs-floating-input-fullname"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >Last Name</label
                      >
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <div class="w-full">
                    <div class="relative">
                      <input
                        type="email"
                        :disabled="!isEdit"
                        v-model="email"
                        id="hs-floating-input-email"
                        class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="you@email.com"
                      />
                      <label
                        for="hs-floating-input-email"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >Email</label
                      >
                    </div>
                  </div>
                  <div class="w-full">
                    <div class="relative">
                      <input
                        type="text"
                        :disabled="!isEdit"
                        v-model="phone"
                        id="hs-floating-input-phone"
                        class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="Your Full Name"
                      />
                      <label
                        for="hs-floating-input-phone"
                        class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >Phone</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end gap-2">
                <button
                  v-if="isEdit"
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                  @click="() => (isEdit = false)"
                >
                  Cancel
                </button>
                <button
                  v-if="isEdit"
                  type="submit"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Update
                </button>
                <button
                  v-else
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                  @click="() => (isEdit = true)"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        id="bar-with-underline-2"
        class="hidden"
        role="tabpanel"
        aria-labelledby="bar-with-underline-item-2"
      >
        <p class="text-gray-500 dark:text-gray-400">
          This is the
          <em class="font-semibold text-gray-800 dark:text-gray-200">second</em>
          item's tab body.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/types/intefaces/User.inteface";
import useUserStore from "~/stores/user";
const nuxtApp = useNuxtApp();

const supabase = useSupabaseClient();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const image = ref("./img/user.jpg");
const isEdit = ref(false);

const props = defineProps({
  user: Object as PropType<User>,
});

const update = async () => {
  nuxtApp.$loadingScreen(true);
  try {
    const { error } = await supabase.auth.updateUser({
      email: email.value,
      phone: phone.value,
      data: {
        full_name: firstName.value + " " + lastName.value,
        avatar_url: image.value,
      },
    });
    if (error) throw error;
    await supabase.auth.getUser().then(({ data }) => {
      useUserStore().setUser(data.user);
    });
    nuxtApp.$toast({
      show: true,
      message: "Signed in successfully",
      type: "success",
    });
  } catch (err: any) {
    nuxtApp.$toast({
      show: true,
      message: err.message,
      type: "error",
    });
  }
  isEdit.value = false;
  nuxtApp.$loadingScreen(false);
};

const upload = async (event) => {
  nuxtApp.$loadingScreen(true);
  try {
    const file = event.target.files[0];
    const { data: imageList, error: imageListError } = await supabase.storage
      .from("avatars")
      .list(`${props.user.id}/`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    if (imageListError) throw imageListError;
    if (imageList.length > 0) {
      await supabase.storage
        .from("avatars")
        .remove(imageList.map((file: any) => file.id));
    }
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(`${props.user.id}/${file.name}`, file);
    if (uploadError) throw uploadError;
    console.log("uploadData : ", uploadData);
    const publicUrl = await supabase.storage
      .from("avatars")
      .getPublicUrl(`${props.user.id}/${file.name}`);
    image.value = publicUrl.data.publicUrl;
    await supabase.auth.updateUser({
      data: { avatar_url: image.value },
    });
    await supabase.auth.getUser().then(({ data }) => {
      useUserStore().setUser(data.user);
    });
    isEdit.value = false;
    nuxtApp.$toast({
      show: true,
      message: "Image uploaded successfully",
      type: "success",
    });
  } catch (error) {
    nuxtApp.$toast({
      show: true,
      message: error.message,
      type: "error",
    });
  }
  nuxtApp.$loadingScreen(false);
};

watch(
  () => props.user,
  (user: User) => {
    console.log("user : ", user);
    if (user) {
      if (user.user_metadata && user.user_metadata.full_name) {
        const fullNameParts = user.user_metadata.full_name.split(" ");
        firstName.value = fullNameParts[0] || "";
        lastName.value = fullNameParts[1] || "";
      }
      email.value = user.email || "";
      phone.value = user.phone || "";
      if (
        user.user_metadata &&
        user.user_metadata.avatar_url &&
        user.user_metadata.avatar_url !== ""
      ) {
        image.value = user.user_metadata.avatar_url;
      }
    }
  }
);
</script>

<style scoped></style>
