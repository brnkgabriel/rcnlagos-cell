import { iMember } from "~~/helpers/interfaces"

export default defineNuxtRouteMiddleware(async (to, from) => {


  const user = useSupabaseUser()
  const { setGlobalState } = useGlobalState()
  // console.log("from global middleware, to", to.path, "from", from.path, "data", userData)

  setGlobalState({ fromRoute: from.path, toRoute: to.path })
})