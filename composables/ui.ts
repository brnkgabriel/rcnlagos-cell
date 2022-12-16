import { iUi } from "~~/helpers/interfaces"

const subline = "text-xs h-[13px]"
const tiny = "text-xxs font-bold"
const grayText = "text-rcngray-900"
const flexCenterCenter = "flex justify-center items-center"

export const useUi = () => {
  return {
    mainline: "text-rcnblue-500 font-semibold text-sm",
    subline,
    grayText,
    breadcrumb: grayText + " uppercase mb-1 " + tiny,
    logo: flexCenterCenter + " bg-white shadow-custom absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-full p-2 z-10 -translate-y-1/2",
    bottomNavLink: flexCenterCenter + " flex-col",
    bottomNavLinkIcon: flexCenterCenter + " w-[32px] h-[32px]",
    homeNavLink: "rounded-full bg-white shadow-custom p-3 w-[250px] text-center cursor-pointer text-rcnblue-500 border-2 text-xs",
    center: "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rcnblue-500 focus:border-rcnblue-500 block w-full h-[42px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500",
    memberItem: "flex justify-start items-center my-2 w-card ml-[32px] h-[80px] bg-white rounded-md shadow-custom p-2 cursor-pointer relative",
    memberItemAvatar: "rounded-full w-[64px] h-[64px] absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    memberItemDetails: "flex flex-col items-start justify-start w-listitemdetails px-2 absolute top-1/2 left-[32px] -translate-y-1/2",
    memberItemName: "whitespace-nowrap overflow-hidden text-ellipsis w-full",
    memberItemSubline: "flex justify-center items-center gap-x-1 w-full",
    memberItemOccupationIcon: "w-[16px] h-[16px]",
    memberItemOccupaion: "whitespace-nowrap overflow-x-clip text-ellipsis w-full",
    memberItemBirthday: "rounded-xl w-[64px] h-[64px] absolute right-[8px] top-1/2 -translate-y-1/2 bg-white border-2 border-rcngray-500"
  }
}

export const all = (query: string, parent?: HTMLElement) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query)

export const el = (query: string, parent?: HTMLElement) => parent ? parent.querySelector(query) as HTMLElement : document.querySelector(query) as HTMLElement

export const position = (idx: number, list: any[]) => idx === list.length - 1 ? "last" : ""
