import { iUi } from "~~/helpers/interfaces"

export const useUi = ():iUi => {
  return {
    mainline: "text-rcnblue-500 font-semibold",
    subline: "text-main-500 text-xs font-medium",
    logo: "flex justify-center items-center bg-rcnred-500 absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-lg p-2 z-10 -translate-y-1/2",
    bottomNavLink: "flex justify-center flex-col items-center",
    bottomNavLinkIcon: "w-[32px] h-[32px] flex justify-center items-center",
    homeNavLink: "rounded-full border-rcnblue-500 px-4 py-2 w-[250px] text-center cursor-pointer text-rcnblue-500 font-semibold border-2 text-sm"
  }
}