<template>
  <div class="h-screen">
    <PageLoading />
    <LoadingScreen />
    <AlertToast />
    <div class="flex gap-2 items-center absolute top-6 right-5">
      <Icon name="heroicons:sun" class="w-5 h-5" />
      <Switch
        id="signup-switch"
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
    <div class="flex gap-2 items-center absolute top-6 right-5">
      <Icon name="heroicons:sun" class="w-5 h-5" />
      <Switch
        id="signup-switch"
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
                Sign up
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <NuxtLink
                  class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/login"
                >
                  Sign in here
                </NuxtLink>
              </p>
            </div>

            <div class="mt-5">
              <button
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                @click="signInWithGoogle()"
              >
                <svg
                  class="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <div
                class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
              >
                Or
              </div>

              <!-- Form -->
              <form @submit.prevent="signup()">
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
                        v-model="username"
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

                  <!-- Form Group -->
                  <div>
                    <label
                      for="password"
                      class="block text-sm mb-2 dark:text-white"
                      >Password</label
                    >
                    <div class="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        v-model="password"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="password-error"
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
                      id="password-error"
                    >
                      Password must contain at least 8 characters, including one
                      uppercase letter, one lowercase letter, one digit, and one
                      special character.
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <label
                      for="confirm-password"
                      class="block text-sm mb-2 dark:text-white"
                      >Confirm Password</label
                    >
                    <div class="relative">
                      <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        v-model="confirmPassword"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="confirm-password-error"
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
                      id="confirm-password-error"
                    >
                      Password does not match the password
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Checkbox -->
                  <div class="flex items-center">
                    <div class="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        v-model="acceptTerms"
                        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ms-3">
                      <label for="remember-me" class="text-sm dark:text-white"
                        >I accept the
                        <a
                          class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                          >Terms and Conditions</a
                        ></label
                      >
                    </div>
                  </div>
                  <!-- End Checkbox -->

                  <button
                    type="submit"
                    :disabled="!isSignupFormValid"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign up
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

const supabase = useSupabaseClient();

const nuxtApp = useNuxtApp();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const acceptTerms = ref(false);

const enabled = ref();

const isSignupFormValid = computed(() => {
  return (
    username.value.length > 0 &&
    password.value.length > 0 &&
    confirmPassword.value.length > 0 &&
    acceptTerms.value &&
    isPasswordValid(password.value) &&
    password.value === confirmPassword.value
  );
});

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

watch(password, async (newPassword: string, oldPassword: string) => {
  if (!isPasswordValid(newPassword)) {
    document.getElementById("password-error")?.classList.remove("hidden");
  } else {
    document.getElementById("password-error")?.classList.add("hidden");
  }
});

watch(
  confirmPassword,
  async (newConfirmPassword: string, oldConfirmPassword: string) => {
    if (newConfirmPassword !== password.value) {
      document
        .getElementById("confirm-password-error")
        ?.classList.remove("hidden");
    } else {
      document
        .getElementById("confirm-password-error")
        ?.classList.add("hidden");
    }
  }
);

/**
 * Check if the given password meets the required criteria.
 *
 * @param {string} password - The password to be validated
 * @return {boolean} true if the password is valid, false otherwise
 */
const isPasswordValid = (password: string): boolean => {
  if (password !== "") {
    // Regular expression to match all password criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    // Check if password matches the regex pattern
    return passwordRegex.test(password);
  } else {
    return true;
  }
};

/**
 * Function to sign in with Google using OAuth.
 *
 * @return {Promise<void>} Logs error if there is one during sign-in process.
 */
const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) console.log(error);
};

/**
 * Function to sign up a user using Supabase authentication.
 *
 * @return {Object} An object containing data and error from the sign-up process.
 */
const signup = async () => {
  nuxtApp.$loadingScreen(true);
  try {
    let { data, error } = await supabase.auth.signUp({
      email: username.value,
      password: password.value,
      options: {
        emailRedirectTo: "http://localhost:3000/confirm",
      },
    });
    if (error) throw error;
    nuxtApp.$toast({
      show: true,
      message: "Signed in successfully, Verification email sent!",
      type: "success",
    });
  } catch (err: any) {
    nuxtApp.$toast({
      show: true,
      message: err.message,
      type: "error",
    });
  }
  nuxtApp.$loadingScreen(false);
};
</script>

<style scoped></style>
