
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const guardedPaths = ['/members']
  console.log("user", user.value)
  if (!user.value && guardedPaths.includes(to.path)) {
    return navigateTo(`/auth/login/?redirect=${to.path.split("/")[1]}`)
  }
})