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
  const localStateStr = localStorage.getItem("memberState")
  const localState = localStateStr ? JSON.parse(localStateStr) : {
    members: [],
    selected: {},
    searched: [],
    rendered: []
  }
  store.$state = localState
})
</script>