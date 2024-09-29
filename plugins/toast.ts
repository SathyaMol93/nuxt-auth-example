import useUiStore from "~/stores/ui";
import type { Toast } from "~/types/intefaces/UiInterface";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("toast", (toast:Toast) => useUiStore().setToast(toast));
});
