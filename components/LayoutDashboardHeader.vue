<template>
  <div
    v-if="crumbs.length > 2"
    id="dashboard-header"
    class="h-20 w-full flex bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-white justify-between px-5 py-5 shadow-lg items-center"
  >
    <h1 class="text-3xl capitalize font-semibold">{{ page }}</h1>
    <div class="flex gap-3 items-center h-full">
      <template v-for="(crumb, i) in crumbs" :key="i">
        <NuxtLink
          class="font-medium capitalize hover:text-blue-700"
          v-if="crumb.route !== ''"
          :to="crumb.route"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-if="crumb.route !== '' && i < crumbs.length - 1">
          <Icon name="heroicons:chevron-right" class="w-5 h-5" />
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const crumbs = ref([]);
const page = ref("");
onMounted(() => {
  crumbs.value = route.path
    .split("/")
    .map((path: string, index: number, array: string[]) => {
      let route: string = "";
      for (var i = 1; i <= index; i++) {
        route += `/${array[i]}`;
      }
      if (index === array.length - 1) {
        page.value = path;
      }
      return {
        label: path,
        route: route,
      };
    });
});

watch(
  () => route.fullPath,
  async () => {
    crumbs.value = route.path
      .split("/")
      .map((path: string, index: number, array: string[]) => {
        let route: string = "";
        for (var i = 1; i <= index; i++) {
          route += `/${array[i]}`;
        }
        if (index === array.length - 1) {
          page.value = path;
        }
        return {
          label: path,
          route: route,
        };
      });
  }
);
</script>

<style scoped></style>
