<template>
    <div :class="pageTitle">
      settings
    </div>
</template>
<script setup>
const { pageTitle } = useUi()
definePageMeta({
  layout: "catalog",
});
</script>