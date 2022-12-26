
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()

  // try {
  //   const email = user.value?.email
  //   const supabase = useSupabaseClient()
  //   let { data: res, error } = await supabase
  //   .from(constants.members)
  //   .select("*")
  //   .eq("email", email)

  //   if (error) throw error

  //   console.log("to.path", to.path, "from.path", from.path, "data", res, "email", email, )
  // } catch (error: any) {
  //   console.log(error.message)
  // }
  // const guardedPaths = ['/members']
  // console.log("user", user.value)
  // if (!user.value && guardedPaths.includes(to.path)) {
  //   return navigateTo({
  //     path: "/auth/login",
  //     query: {
  //       redirect: to.path
  //     }
  //   })
  // }
})