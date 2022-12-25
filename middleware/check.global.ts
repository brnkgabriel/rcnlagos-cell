export default defineNuxtRouteMiddleware((to, from) => {
  console.log("from", from.path, "to", to.path)
})