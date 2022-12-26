
export default defineNuxtRouteMiddleware(async (to, from) => {

  console.log("from global middleware, to", to.path, "from", from.path)

  const { setGlobalState } = useGlobalState()

  setGlobalState({ fromRoute: from.path, toRoute: to.path })
})