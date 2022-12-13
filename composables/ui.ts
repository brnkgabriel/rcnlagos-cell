import { iUi } from "~~/helpers/interfaces"

const subline = "text-xs font-medium h-[13px]"
const grayText = "text-rcngray-900"
const flexCenterCenter = "flex justify-center items-center"

export const useUi = ():iUi => {
  return {
    mainline: "text-rcnblue-500 font-semibold",
    subline,
    grayText,
    pageTitle: grayText + " uppercase mb-1 " + subline,
    logo: flexCenterCenter + " bg-rcnred-500 absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-lg p-2 z-10 -translate-y-1/2",
    bottomNavLink: flexCenterCenter + " flex-col",
    bottomNavLinkIcon: flexCenterCenter + " w-[32px] h-[32px]",
    homeNavLink: "rounded-full border-rcnblue-500 px-4 py-2 w-[250px] text-center cursor-pointer text-rcnblue-500 font-semibold border-2 text-sm",
    center: "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  }
}