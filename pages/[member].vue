<template>
  <div>
    <div :class="breadcrumb">home &gt;&gt; {{name}}</div>
    update
  </div>
</template>
<script setup lang="ts">

const { name } = useRoute()
const { breadcrumb } = useUi()
definePageMeta({
  layout: "catalog",
});
</script>