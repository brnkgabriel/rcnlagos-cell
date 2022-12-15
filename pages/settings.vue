<template>
  <div :class="breadcrumb">home &gt;&gt; {{name}}</div>
</template>
<script setup lang="ts">
const { breadcrumb } = useUi()
const { name } = useRoute()
definePageMeta({
  layout: "catalog",
});
</script>