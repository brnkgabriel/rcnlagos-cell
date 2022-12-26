import { useMemberStore } from "~~/store/members-store"

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useMemberStore()
  console.log("from in user is", user)
  if (user) {
    // return navigateTo(to.redirectedFrom)
    return navigateTo(to.redirectedFrom)
  }
})