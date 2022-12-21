<template>
  <Suspense>
    <template #default>
      <MembersComponent />
    </template>
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>
<script setup lang="ts">
  
definePageMeta({ layout: "catalog" });
</script>
<style lang="">
  
</style>