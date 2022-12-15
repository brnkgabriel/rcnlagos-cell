import { iUi } from "~~/helpers/interfaces"

const subline = "text-xs h-[13px]"
const tiny = "text-xxs font-bold"
const grayText = "text-rcngray-900"
const flexCenterCenter = "flex justify-center items-center"

export const useUi = ():iUi => {
  return {
    mainline: "text-rcnblue-500 font-semibold",
    subline,
    grayText,
    breadcrumb: grayText + " uppercase mb-1 " + tiny,
    logo: flexCenterCenter + " bg-white shadow-custom absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-full p-2 z-10 -translate-y-1/2",
    bottomNavLink: flexCenterCenter + " flex-col",
    bottomNavLinkIcon: flexCenterCenter + " w-[32px] h-[32px]",
    homeNavLink: "rounded-full bg-white shadow-custom px-4 py-2 w-[250px] text-center cursor-pointer text-rcnblue-500 font-semibold border-2 text-sm",
    center: "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rcnblue-500 focus:border-rcnblue-500 block w-full h-[42px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500"
  }
}

export const all = (query: string, parent?: HTMLElement) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query)

export const el = (query: string, parent?: HTMLElement) => parent ? parent.querySelector(query) : document.querySelector(query)