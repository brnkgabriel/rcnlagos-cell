import { useMemberStore } from "~~/store/members-store"
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useMemberStore()
  
  if (!store.user) {
    return navigateTo({
      path: `/auth/login?redirect=${to.path}`,
    })
  }
})