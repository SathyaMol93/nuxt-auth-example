<template>
  <div class="h-screen w-full flex justify-center items-center">
    <h1 class="text-xl-7 font-semi-bold">Dashboard!</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-layout",
  middleware: 'auth'
});
</script>

<style scoped></style>
