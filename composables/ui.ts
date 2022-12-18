import { iUi } from "~~/helpers/interfaces"

const subline = "text-xs"
const tiny = "text-xxxs font-bold"
const grayText = "text-rcngray-900"
const flexCenterCenter = "flex justify-center items-center"

export const useUi = () => {
  return {
    mainline: "text-rcnblue-500 font-semibold text-sm",
    texttrim: "w-full overflow-hidden whitespace-nowrap text-ellipsis",
    mainline_small: "text-rcnblue-500 font-semibold text-xs",
    subline_small: "text-xxs",
    subline,
    grayText,
    breadcrumb: grayText + " uppercase mb-1 " + tiny,
    logo: flexCenterCenter + " bg-white shadow-custom absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-full p-2 z-10 -translate-y-1/2",
    bottomNavLink: flexCenterCenter + " flex-col",
    bottomNavLinkIcon: flexCenterCenter + " w-[32px] h-[32px]",
    homeNavLink: "rounded-full bg-white shadow-custom p-3 w-[250px] text-center cursor-pointer text-rcnblue-500 border-2 text-xs",
    button: "rounded-full bg-rcnblue-500 shadow-custom p-3 w-full text-center cursor-pointer text-white border-2 text-xs uppercase",
    center: "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
    input: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rcnblue-500 focus:border-rcnblue-500 block w-full h-[42px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500",
    memberItem: "flex flex-col basis-[100px] flex-grow w-1/2 sm:w-1/4 overflow-hidden rounded-md shadow-custom bg-white cursor-pointer",
    memberItemOccupationIcon: "w-[16px] h-[16px]",
  }
}

export const all = (query: string, parent?: HTMLElement) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query)

export const el = (query: string, parent?: HTMLElement) => parent ? parent.querySelector(query) as HTMLElement : document.querySelector(query) as HTMLElement

export const position = (idx: number, list: any[]) => idx === list.length - 1 ? "last" : "others"
