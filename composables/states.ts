import { iMember, iMemberState } from "~~/helpers/interfaces"

export const useMemberState = () => {
  const memberState = useState<iMemberState>("memberState", () => ({
    members: [],
    rendered: [],
    selected: {},
    searched: [],
    searchTerm: ""
  }))

  const setMembers = (value: iMember[]) => memberState.value.members = value
  const setRendered = (value: iMember[]) => memberState.value.rendered = value 
  const setSelected = (value: iMember) => memberState.value.selected = value
  const setSearched = (value: iMember[]) => memberState.value.searched = value

  return { setMembers, setRendered, setSelected, setSearched, memberState}
}