import { iMember } from "~~/helpers/interfaces"

export default defineNuxtRouteMiddleware(async (to, from) => {


  const user = useSupabaseUser()
  const { setGlobalState, globalState } = useGlobalState()
  let userData: iMember = {}

  if (user.value && !globalState.value.user.email) {
    const data = await getUser(user.value?.email) as any[]
    userData = data[0]
  }
  // console.log("from global middleware, to", to.path, "from", from.path, "data", userData)

  console.log("from check.global.ts, userData", userData, "user is", user.value)
  setGlobalState({ fromRoute: from.path, toRoute: to.path, user: userData })
})