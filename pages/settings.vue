<template>
    <div :class="pageTitle">
      {{name}}
    </div>
</template>
<script setup>
const { pageTitle } = useUi()
const { name } = useRoute()
definePageMeta({
  layout: "catalog",
});
</script>