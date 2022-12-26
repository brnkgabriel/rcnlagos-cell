
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const guardedPaths = ['/members']
  if (!user.value && guardedPaths.includes(to.path)) {
    return navigateTo(`/auth/login/?redirect=${to.path.split("/")[1]}`)
  }
})