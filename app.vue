<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"
import { fromLocalStorage, toLocalStorage } from "./composables/util";

const store = useMemberStore()

watch(store, () => {
  toLocalStorage("memberState", store.$state)
}, { deep: true })

onMounted(() => {
  const dataIfNull = { members: [], selected: {}, searched: [],  rendered: [] }
  store.$state = fromLocalStorage("memberState", dataIfNull)
})
</script>