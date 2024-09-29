<template>
  <!-- Toast -->
  <div
    v-if="toastState.show"
    :class="{
      'translate-x-0 opacity-100': toastState.show,
      'translate-x-full opacity-0': !toastState.show,
      'bg-teal-500': toastState.type == 'success',
      'bg-blue-500 ': toastState.type == 'info',
      'bg-red-500': toastState.type == 'error',
      'bg-yellow-500': toastState.type == 'warning',
    }"
    class="max-w-96 min-w-72 h-24 flex items-center text-sm text-white rounded-xl shadow-lg absolute bottom-10 right-10 z-[500]"
    role="alert"
  >
    <div class="w-full flex p-4 justify-between gap-4">
      <p class="whitespace-pre">{{ toastState.message }}</p>
      <div class="ms-auto">
        <button
          type="button"
          class="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
          @click="closeToast()"
        >
          <span class="sr-only">Close</span>
          <svg
            class="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- End Toast -->
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import useUiStore from "~/stores/ui";
import type { Toast } from "~/types/intefaces/UiInterface";

const toastState = computed(() => useUiStore().$state.toast);

watch(toastState, (state: Toast) => {
  setTimeout(() => {
    if (state.show) {
      closeToast();
    }
  }, 10000);
});

const closeToast = () => {
  useUiStore().setToast({ show: false, message: "", type: "success" });
};
</script>

<style scoped></style>
