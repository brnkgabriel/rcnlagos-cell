import { iMember } from "~~/helpers/interfaces";

export const phone = (number: any) => {
  if (!number) return ""
  switch (number[0]) {
    case "0": return number.slice(1, number.length)
    case "2": return number.slice(3, number.length)
    case "+": return number.slice(4, number.length)
    default: return number
  }
}

export const constants = {
  membersApiUrl: "/api/g-members",
  settings: 'settings',
  members: 'members',
  meetings: 'meetings',
  events: 'events',
  occupation: 'occupation',
  phonecall: 'phonecall',
  edit: 'edit',
  membersItem: 'membersItem',
  membersList: 'membersList',
  vertical: 'vertical',
  horizontal: 'horizontal',
  div: 'div',
  whatsappIcon: (member: iMember | null) => {
    let number = member ? member?.phoneNumber : "234"
    // @ts-ignore
    number = "234" + phone(number)
    const prefix = member?.gender === 'male' ? "Bro. " : "Sis. "

    return `https://api.whatsapp.com/send?phone=${number}&text=Hello%20${prefix}${member?.firstName}`
  }
}