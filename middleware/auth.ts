import authStore from "~~/store/index"

export default defineNuxtRouteMiddleware((to, from) => {
  if (!authStore.state.value.user) {
    return navigateTo({
      path: "/auth/login",
      query: {
        redirect: to.path
      }
    })
  }
})