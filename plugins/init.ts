import { iGlobalState } from "~~/helpers/interfaces"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobalState>("global", () => ({
    fromRoute: "",
    toRoute: ""
  }))
})
