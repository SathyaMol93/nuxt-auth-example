<template>
  <div id="dashboard-layout" class="flex w-full max-h-screen">
    <PageLoading />
    <LoadingScreen />
    <AlertToast />
    <LayoutDashboardSideNav :is-side-bar-open="isSideBarOpen" />

    <div class="w-full h-screen">
      <div
        class="w-full max-h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        <LayoutDashboardTopNav @submit="openCloneSidebar" />
        <LayoutDashboardHeader />
        <NuxtPage />
        <LayoutDashboardFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "~/stores/user";
const supabase = useSupabaseClient();
const isSideBarOpen = ref(true);
function openCloneSidebar(event: boolean) {
  isSideBarOpen.value = event;
}

onMounted(async () => {
  await supabase.auth.getUser().then(({ data }) => {
    useUserStore().setUser(data.user);
  });
});
</script>

<style scoped></style>
