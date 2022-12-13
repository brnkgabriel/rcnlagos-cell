<template>
    <div :class="subline">
      settings
    </div>
</template>
<script setup>
const { subline } = useUi()
definePageMeta({
  layout: "catalog",
});
</script>