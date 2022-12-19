<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"

const store = useMemberStore()

watch(store, () => {
  localStorage.setItem("memberState", JSON.stringify(store.$state))
}, { deep: true })

onMounted(() => {
  store.$state = getLocalStorage("memberState", { members: [], selected: {}, searched: [],  rendered: [] })
})
</script>