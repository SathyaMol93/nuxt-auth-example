<template>
  <div class="h-screen">
    <PageLoading/>
    <LoadingScreen/>
    <AlertToast />
    <div class="flex gap-2 items-center absolute top-6 right-5">
      <Icon name="heroicons:sun" class="w-5 h-5" />
      <Switch
        id="forgot-switch"
        v-model="enabled"
        :class="enabled ? 'bg-blue-600' : 'bg-gray-400'"
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
    <div class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <div class="w-full max-w-md mx-auto p-6">
        <div
          class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1
                class="block text-2xl font-bold text-gray-800 dark:text-white"
              >
                Forgot password?
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <NuxtLink
                  class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/login"
                >
                  Sign in here
                </NuxtLink>
              </p>
            </div>

            <div class="mt-5">
              <!-- Form -->
              <form>
                <div class="grid gap-y-4">
                  <!-- Form Group -->
                  <div>
                    <label
                      for="email"
                      class="block text-sm mb-2 dark:text-white"
                      >Email address</label
                    >
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="email-error"
                      />
                      <div
                        class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"
                      >
                        <svg
                          class="size-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Reset password
                  </button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const enabled = ref(false);

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
</script>

<style scoped></style>
