import { Ref } from 'nuxt/dist/app/compat/capi';
import { iDatePicker, iLoadNew, iObservation } from "~~/helpers/interfaces"
const m = {
  APPEND: "append",
  INSERTBEFORE: "insertBefore",
  MIDDLE: "middle",
  FIRST: "first",
  LAST: "last",
  DIV: "div",
  DATANAME: "data-name",
  DATATYPE: "data-type",
  DAY: "day",
  MONTH: "month",
  ARIALABEL: "aria-label"
}

const twClasses = {
  set: "inline-flex justify-center rounded-md bg-gray-500 w-[80px] py-2 text-sm font-medium text-white",
  cancel: "inline-flex justify-center rounded-md bg-gray-100 w-[80px] py-2 text-sm font-medium text-gray-900",
  btnsWrap: "flex justify-center items-center gap-x-2",
  dateElement: "mt-4 flex justify-center items-center gap-x-2",
  bottomBorder: "sticky w-full h-[1px] bg-gray-500 top-[calc(50%+25px)]",
  topBorder: "sticky w-full h-[1px] bg-gray-500 top-[calc(50%-25px)]",
  dateDigit: "h-[150px] w-[80px] scrollbar-hide overflow-x-hidden overflow-y-auto text-sm text-gray-500 overflow-hidden snap-y",
  dateDigitWrap: "flex gap-x-2 justify-center items-center",
  dateTitle: "text-lg font-medium leading-6 text-gray-900",
  datePickerEl: "flex flex-col justify-center items-center gap-y-2",
  datePart: "h-[50px] px-4 flex justify-center items-center snap-center",
  includeYr: "flex justify-center items-center gap-x-2 text-xs",
}
export const useDatePicker = (json: iDatePicker) => {
  const observer = new Observer(json)
  return { ...twClasses, observer }
}

class Observer {
  private json: iDatePicker 
  private monthEls: HTMLElement
  private dayEls: HTMLElement
  private yearEls: HTMLElement

  private everyMonth: NodeListOf<Element>
  private everyDay: NodeListOf<Element>
  private everyYear: NodeListOf<Element>

  private selected: Ref<string>
  private includeYrEl: Ref<HTMLElement>

  private lastMonth: () => Element
  private lastDay: () => Element
  private firstMonth: () => Element
  private firstDay: () => Element
  private capitalize: (s: string) => string
  private key: (type: string) => string

  private monthObserver: IntersectionObserver
  private dayObserver: IntersectionObserver
  private yearObserver: IntersectionObserver

  private lastMObserver: IntersectionObserver
  private lastDObserver: IntersectionObserver
  private firstMObserver: IntersectionObserver
  private firstDObserver: IntersectionObserver

  private selectedMap: {
    day: number;
    month: string;
    year: number;
  }

  private includeYearFlag = true

  constructor(json: iDatePicker) {
    const { selected, includeYrEl } = json 

    this.includeYrEl = includeYrEl

    this.selected = selected
    this.selectedMap = { month: "January", day: 1, year: 1990 }

    this.lastMonth = () => el(".month.last")
    this.lastDay = () => el(".day.last")
    this.firstMonth = () => el(".month.first")
    this.firstDay = () => el(".day.first")
    this.key = (type: string) => `${type}Els`
    this.capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1)

  }

  start() {
    this.everyMonth = all(".month")
    this.everyDay = all(".day")
    this.everyYear = all(".year")

    this.monthEls = el(`div[aria-label="months"]`)
    this.dayEls = el(`div[aria-label="days"]`)
    this.yearEls = el(`div[aria-label="years"]`)

    const dOptions = { rootMargin: "-50px 0px -50px 0px", threshold: 0.5 }
    const monthOptions = { ...dOptions, root: this.monthEls }
    const dayOptions = { ...dOptions, root: this.dayEls }
    const yearOptions = { ...dOptions, root: this.yearEls }

    const eOptions = { rootMargin: "50px 0px -20px 0px", threshold: 0.5 }


    const mEdgeOptions = { ...eOptions, root: this.monthEls }
    const dEdgeOptions = { ...eOptions, root: this.dayEls }

    this.monthObserver = new IntersectionObserver(this.observation.bind(this), monthOptions)
    this.dayObserver = new IntersectionObserver(this.observation.bind(this), dayOptions)
    this.yearObserver = new IntersectionObserver(this.observation.bind(this), yearOptions)

    this.lastMObserver = new IntersectionObserver(entries => this.edgeObservation({
      entries, type: m.MONTH, position: m.LAST
    }), mEdgeOptions)
    this.lastDObserver = new IntersectionObserver(entries => this.edgeObservation({
      entries, type: m.DAY, position: m.LAST
    }), dEdgeOptions)
    this.firstMObserver = new IntersectionObserver(entries => this.edgeObservation({
      entries, type: m.MONTH, position: m.FIRST
    }), mEdgeOptions)
    this.firstDObserver = new IntersectionObserver(entries => this.edgeObservation({
      entries, type: m.DAY, position: m.FIRST
    }), dEdgeOptions)

    this.everyMonth.forEach(month => this.monthObserver.observe(month))
    this.everyDay.forEach(day => this.dayObserver.observe(day))
    this.everyYear.forEach(year => this.yearObserver.observe(year))

    this.scrollToPosition("day", this.dayEls.getBoundingClientRect())
    this.scrollToPosition("month", this.monthEls.getBoundingClientRect())

    this.lastMObserver.observe(this.lastMonth())
    this.lastDObserver.observe(this.lastDay())
    this.firstMObserver.observe(this.firstMonth())
    this.firstDObserver.observe(this.firstDay())

    this.includeYrEl.value.addEventListener("change", this.toggleYear.bind(this))
    console.log("iDatepicker starts")
  }

  toggleYear(evt: Event) {
    const checkbox: HTMLInputElement = evt.target as HTMLInputElement
    this.includeYearFlag = checkbox.checked
    this.yearEls.classList.toggle("hidden")
    this.updateSelected()
  }

  observation(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const target = entry.target
      if (entry.isIntersecting) {
        target.classList.add("in-view")
        this.updateUi(target)
      } else {
        target.classList.remove("in-view")
      }
    })
  }
  
  scrollToPosition(type: string, rect: DOMRect) {
    this[`${type}Els`].scrollTo(0, rect.y)
  }

  edgeObservation(observed: iObservation) { 
    const { entries, position, type } = observed
    const entry = entries[0] 
    if (!entry.isIntersecting) return
    entry.target.classList.remove(position)
    const list = type === m.DAY ? [...constants.DAYLIST] : [...constants.MONTHLIST]
    const action = position === m.FIRST ? m.INSERTBEFORE : m.APPEND
    const referenceNode = position === m.FIRST ? entry.target : null
    this.loadNew({ action, list, referenceNode, type })
    
    const observer = `${position}${this.capitalize(type)[0]}Observer`
    const toObserve = `${position}${this.capitalize(type)}`
    const toObserveEl = this[toObserve]()
    entry.target.classList.remove(position)
    this[observer].unobserve(entry.target)
    this[observer].observe(toObserveEl)
  }

  loadNew(details: iLoadNew) {
    const { action, list, referenceNode, type } = details
    
    list.forEach((name, idx) => {
      const elm = document.createElement(m.DIV)
      elm.textContent = type === m.MONTH ? name.slice(0, 3) : name
      let position = m.MIDDLE
      if (action === m.APPEND)
        position = idx === list.length - 1 ? m.LAST : m.MIDDLE
      else
        position = idx === 0 ? m.FIRST : m.MIDDLE
      
      elm.className = `${type} ${position} ${twClasses.datePart}`
      elm.setAttribute(m.DATANAME, name)
      elm.setAttribute(m.DATATYPE, type)
      elm.setAttribute(m.ARIALABEL, `${type} part`)

      const observerName = `${type}Observer`
      this[observerName].observe(elm)
      
      const parent = this[`${type}Els`]

      if(referenceNode) parent[action](elm, referenceNode)
      else parent[action](elm)
    })
  }

  updateUi(target: Element) {
    const type = target.getAttribute("data-type")
    const name = target.getAttribute("data-name")
    this.selectedMap[type] = name
    this.updateSelected()
  }

  updateSelected() {
    this.selected.value = this.includeYearFlag
     ? `${this.selectedMap.month} ${this.selectedMap.day}, ${this.selectedMap.year}`
     : `${this.selectedMap.month} ${this.selectedMap.day}`
  }

  end() {
    console.log("iDatePicker ends")
    this.everyMonth.forEach(month => this.monthObserver.unobserve(month))
    this.everyDay.forEach(day => this.dayObserver.unobserve(day))
    this.everyYear.forEach(year => this.yearObserver.unobserve(year))
    this.includeYrEl.value.removeEventListener("change", this.toggleYear.bind(this))
  }
}