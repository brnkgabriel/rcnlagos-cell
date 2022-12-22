<template>
  <Login />
</template>
<script setup lang="ts">

definePageMeta({
  layout: "home",
  middleware: "logged-in"
});
</script>
<style lang="">
    
  </style>