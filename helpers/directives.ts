import { el } from "~~/composables/ui"

class Controller {

  public last!: HTMLElement

  constructor() {

  }
}
export const vInfiniteScroll = {
  maxItem: 2,
  controller: new Controller(),
  init: (ele: HTMLElement, from: string) => {
    const last = el('.last', ele) 
    if (!vInfiniteScroll.controller.last && last) {
      vInfiniteScroll.observe(ele, from)
      vInfiniteScroll.controller.last = last
    }
  },
  observe: (ele: HTMLElement, from: string) => {
    console.log("observing from", from)
  },
  updated: (ele: HTMLElement) => {
    vInfiniteScroll.init(ele, "updated")
  },
  mounted: (ele: HTMLElement) => {
    vInfiniteScroll.init(ele, "mounted") 
  }
}
