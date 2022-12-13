import { iUi } from "~~/helpers/interfaces"

export const useUi = ():iUi => {
  return {
    mainline: "text-rcnblue-500 font-semibold",
    subline: "text-main-500 text-xs font-medium",
    logo: "flex justify-center items-center bg-rcnred-500 absolute top-[40%] left-[16px] w-[50px] h-[50px] rounded-lg p-2 z-10 -translate-y-1/2",
  }
}