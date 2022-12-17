<template>
  <div>
    <div :class="breadcrumb">home &gt;&gt; update &gt;&gt; {{memberState.selected.firstName}} {{memberState.selected.lastName}}</div>
    update
  </div>
</template>
<script setup lang="ts">

const { name } = useRoute()
const { breadcrumb } = useUi()

const { memberState } = useMemberState()

watch(memberState, () => {
  console.log("watching memberstate from update", memberState.value)
})

onMounted(() => {
  console.log("selected", memberState.value)
})

definePageMeta({
  layout: "catalog",
});
</script>