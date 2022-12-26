<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"
import { fromLocalStorage, toLocalStorage } from "./composables/util";

const store = useMemberStore()
const supabase = useSupabaseClient()

watch(store, () => {
  toLocalStorage("memberState", store.$state)
}, { deep: true })

// const createCookie = async (email: string | undefined) => {
//   const userCookie = useCookie("user", { maxAge: 60 * 60 * 8 })
  
//   try {
    
//     let { data } = await supabase
//     .from("members")
//     .select("*")
//     .eq("email", email)
//     // @ts-ignore
//     userCookie.value = data?.values.length > 0 ? constants.registered : constants.anonymous
//     return userCookie.value
//   } catch (error) {
//     console.log("error", error)
//     return null
//   }
// }

supabase.auth.onAuthStateChange((_, session) => {
  store.setUser(session)
})

watchEffect(() => {
  // if (!user.value) navigateTo("/login")
})

onMounted(() => {
  const dataIfNull = { members: [], selected: {}, searched: [],  rendered: [] }
  store.$state = fromLocalStorage("memberState", dataIfNull)
})
</script>