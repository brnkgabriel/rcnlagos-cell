// export default defineNuxtRouteMiddleware((to, from) => {
//   const userOnCookie = useCookie("user")

//   if (userOnCookie.value) {
//     const url = userOnCookie.value === constants.registered ? to.path : "/auth/register"
//     return navigateTo(url)
//   }
// })