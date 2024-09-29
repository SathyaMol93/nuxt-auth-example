<template>
  <div class="h-screen w-full flex justify-center items-center p-5">
    <CalendarBase />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-layout",
  middleware: 'auth'
});
</script>

<style scoped></style>
