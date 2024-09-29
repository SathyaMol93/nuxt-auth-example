<template>
  <div
    v-if="loaderState == true"
    class="flex w-full h-1.5 bg-gray-200 overflow-hidden dark:bg-gray-700 absolute top-0 left-0 z-[500]"
    role="progressbar"
    :aria-valuenow="ariavaluenow"
    :aria-valuemin="ariavaluemin"
    :aria-valuemax="ariavaluemax"
  >
    <div
      class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
      :style="{ width: ariavaluenow + '%' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import useUiStore from "~/stores/ui";

const nuxtApp = useNuxtApp();
const ariavaluenow = ref(0);
const ariavaluemin = ref(0);
const ariavaluemax = ref(100);

nuxtApp.hook("page:finish", () => {
  if (useUiStore().$state.pageLoader == true) {
    useUiStore().setPageLoader(false);
  }
});

const loaderState = computed(() => useUiStore().$state.pageLoader);
let interval: NodeJS.Timeout | null = null;

watch(loaderState, (state: boolean) => {
  if (state === true) {
    interval = setInterval(() => {
      if (ariavaluenow.value < 100) {
        ariavaluenow.value += 1;
      }
    }, 100);
  } else {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }
});
</script>

<style scoped></style>
