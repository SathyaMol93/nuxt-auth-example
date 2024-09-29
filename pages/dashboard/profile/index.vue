<template>
  <div class="h-screen w-full flex justify-center p-5">
    <UserProfile :user="userState" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import useUserStore from "~/stores/user";
definePageMeta({
  layout: "dashboard-layout",
  middleware: "auth",
});
const userState = ref(null);
onMounted(() => {
  userState.value = useUserStore().$state.user;
});
</script>

<style scoped></style>
