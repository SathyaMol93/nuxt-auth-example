import useUiStore from "~/stores/ui";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("loadingScreen", (show:boolean) => useUiStore().setLoadingScreen(show));
});
