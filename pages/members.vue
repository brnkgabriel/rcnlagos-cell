<template>
  <MembersComponent />
</template>
<script setup lang="ts">
  
definePageMeta({
  layout: "catalog",
  middleware: "auth"
});
</script>