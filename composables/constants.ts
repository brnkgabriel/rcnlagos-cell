import { iMember } from "~~/helpers/interfaces";

export const phone = (number: any) => {
  if (!number) return ""
  switch (number[0]) {
    case "0": return "+234" + number.slice(1, number.length)
    case "1": return "+1" + number.slice(1, number.length)
    case "2": return "+234" + number.slice(3, number.length)
    case "+": return number[1] === "2" ? "+234" + number.slice(4, number.length) : "+1" + number.slice(4, number.length)
    default: return number
  }
}

export const constants = {
  membersApiUrl: "/api/g-members",
  imageUploadApiUrl: "/api/p-image",
  monthMap: {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
  },
  monthList: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ],
  birthdayMinDuration: "1440",
  home: 'home',
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
    let number = member ? member?.phoneNumber : "0"
    // @ts-ignore
    const num = phone(number)
    number = num.slice(1, num.length)
    const prefix = member?.gender === 'male' ? "Bro. " : "Sis. "

    return `https://api.whatsapp.com/send?phone=${number}&text=Hello%20${prefix}${member?.firstName}`
  }
}