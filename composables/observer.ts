import { iCombined, iObserver } from "~~/helpers/interfaces";

export const useObserver = (options: iObserver) => {
  const observer: Observer = new Observer(options)
  return {
    observer
  }
}

class Observer {
  private items: NodeListOf<Element> | null = null
  private visibleItems: NodeListOf<Element> | null = null
  private root: Element | null = null
  private options: iObserver;
  private intObserver: IntersectionObserver | null = null
  private itemsQuery: () => string
  private rootQuery: () => string
  private visibleQuery: () => string

  constructor(options: iObserver) {
    this.options = options
    this.itemsQuery = () => `div[aria-label="${this.options.cLabel}"]`
    this.rootQuery = () => `div[aria-label="${this.options.pLabel}"]`
    this.visibleQuery = () => `${this.itemsQuery()}:not(.hidden)`
  }

  start() {
    this.items = all(this.itemsQuery())
    this.root = el(this.rootQuery())

    const rootMargin = this.rootMargin(this.options.direction)
    const options = { rootMargin, threshold: 0.5, root: this.root }

    this.intObserver = new IntersectionObserver(this.observation.bind(this), options)
    
    this.items.forEach(item => this.intObserver?.observe(item))
  }

  observation(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const target = entry.target
      if (entry.isIntersecting) {
        target.classList.remove("hidden")
      } else {
        target.classList.add("hidden")
      }
    })
    this.visibleItems = all(this.visibleQuery())
    console.log("visible items", this.visibleItems)
  }

  rootMargin(direction: string) {
    switch (direction) {
      case constants.vertical: return "50px 0px 50px 0px"
      case constants.horizontal: return "0px 50px 0px 50px"
      default: return "0px";
    }
  }

  end() {
    this.items?.forEach(item => this.intObserver?.unobserve(item))
    this.items = null
    this.root = null
    this.intObserver = null
  }
}