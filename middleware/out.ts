// export default defineNuxtRouteMiddleware((to, from) => {
//   const userOnCookie = useCookie("user")
//   if (!userOnCookie.value) {
//     return navigateTo({
//       path: "/auth/login",
//       query: {
//         redirect: to.path
//       }
//     })
//   }
// })