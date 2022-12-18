import { setActivePinia, createPinia } from "pinia"
import { describe, test, expect, beforeAll, vi, beforeEach, afterEach } from "vitest"
import { useMemberStore } from "./members-store"

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useMemberStore', () => {
  let store: ReturnType<typeof useMemberStore>
 
  beforeEach(() => {
    vi.useFakeTimers()
    store = useMemberStore()
  })

  afterEach(() => {
    vi.useRealTimers()
    store.$reset()
  })

  test('creates a store', () => {
    expect(store).toBeDefined()
  })

  test('initializes with empty members', () => {
    expect(store.members).toStrictEqual([])
  })

  test('adds a member', () => {
    store.setMembers([{ firstName: 'lanre' }])
    expect(store.members[0]).toBeDefined()
    expect(store.members[0].firstName).toBe("lanre")
  })

  test('gets by id', () => {
    store.setMembers([{ firstName: 'lanre', id: '2' }])
    const item = store.members[0]

    expect(store.getById('2')).toStrictEqual(item)
  })

  test('gets ordered members without mutating state', () => {
    const members = [
      { birthday: 'september 1' },
      { birthday: 'december 25' },
      { birthday: 'december 26' },
      { birthday: 'december 17' }
    ]

    const date = new Date(2022, 11, 17)
    vi.setSystemTime(date)
    store.setMembers(members)
    
    const orderedMembers = store.getOrderedMembers

    expect(orderedMembers?.reordered[0].birthday).toBe('december 17')
    expect(orderedMembers?.reordered[1].birthday).toBe('december 25')
    expect(orderedMembers?.reordered[2].birthday).toBe('december 26')
    expect(orderedMembers?.reordered[3].birthday).toBe('september 1')
  })
  test('gets as is members', () => {
    const members = [
      { birthday: 'september 1' },
      { birthday: 'december 25' },
      { birthday: 'december 26' },
      { birthday: 'december 17' }
    ]
    store.setMembers(members)

    expect(store.members[0].birthday).toBe('september 1')
    expect(store.members[1].birthday).toBe('december 25')
    expect(store.members[2].birthday).toBe('december 26')
    expect(store.members[3].birthday).toBe('december 17')
  })
  test('gets searched member list with empty string as input', () => {
    const members = [
      { birthday: 'september 1' },
      { birthday: 'december 25' },
      { birthday: 'december 26' },
      { birthday: 'december 17' }
    ]
    // the search algorithm reorders by current time
    // so we need to set the time to December 17, 2022 12am
    const date = new Date(2022, 11, 17)
    vi.setSystemTime(date)
    store.setMembers(members)
    store.setSearched("")

    const searched = store.searched

    expect(searched[0].birthday).toBe('december 17')
    expect(searched[1].birthday).toBe('december 25')
    expect(searched[2].birthday).toBe('december 26')
    expect(searched[3].birthday).toBe('september 1')
  })

  test('gets selected member', () => {
    const member = { firstName: 'samuel' }

    store.setSelected(member)

    expect(store.selected.firstName).toStrictEqual('samuel')
  })

  test('remove member by id', () => {
    const members = [
      { birthday: 'december 17', id: '4' }
    ]
    store.setMembers(members)
    store.remove('4')
    expect(store.getById('4')).toBeUndefined()
  })

  test('update member by id', () => {
    const members = [
      { birthday: 'december 17', id: '4' }
    ]
    const updatedMember = { birthday: 'january 18', id: '4'}
    store.setMembers(members)
    store.update('4', updatedMember)
    expect(store.getById('4').birthday).toBe('january 18')
  })

  test('update member by id that does not exist', () => {
    const members = [
      { birthday: 'december 17', id: '4' }
    ]
    const updatedMember = { birthday: 'january 18', id: '4'}
    store.setMembers(members)
    store.update('5', updatedMember)
    expect(store.getById('5')).toBeUndefined()
  })

  test('sets rendered members', () => {
    const members = [
      { birthday: 'september 1' },
      { birthday: 'december 25' },
      { birthday: 'december 26' },
      { birthday: 'december 17' }
    ]

    store.setRendered(members)
    expect(store.rendered[0].birthday).toStrictEqual('september 1')
  })


  test('add to rendered members', () => {
    const members = [
      { birthday: 'september 1' },
    ]
    const toAdd = [
      { birthday: 'september 3' },
      { birthday: 'september 4' },
    ]

    store.setRendered(members)
    store.addToRender(toAdd)
    expect(store.rendered[1].birthday).toStrictEqual('september 3')
  })
})