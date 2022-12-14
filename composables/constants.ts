import { iMember } from "~~/helpers/interfaces";

export const constants = {
  membersApiUrl: "/api/g-members",
  settings: 'settings',
  members: 'members',
  meetings: 'meetings',
  events: 'events',
  occupation: 'occupation',
  whatsappIcon: (member: iMember | null) => {

    let number = member ? member.phoneNumber : null
    if (number) {
      switch (number[0]) {
        case "0":
          number = "234" + number.slice(1, number.length)
          break;
        case "2":
          number = number
        case "+":
          number = number.slice(1, number.length)
        default:
          number = "234" + number
          break;
      }
    } else {
      number = "234"
    }

    return `https://api.whatsapp.com/send?phone=${number}&text=Hello%20${member?.firstName}`
  }
}