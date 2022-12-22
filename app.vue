<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"
import { fromLocalStorage, toLocalStorage } from "./composables/util";

const store = useMemberStore()
const user = useSupabaseUser()

watch(store, () => {
  toLocalStorage("memberState", store.$state)
}, { deep: true })

watchEffect(() => {
  if (user.value) {
    const userCookie = useCookie("user", { maxAge: 60 * 60 * 8 })
    userCookie.value = user.value.email as string
  }
  console.log("user", user.value)
})

onMounted(() => {
  const dataIfNull = { members: [], selected: {}, searched: [],  rendered: [] }
  store.$state = fromLocalStorage("memberState", dataIfNull)
})
</script>