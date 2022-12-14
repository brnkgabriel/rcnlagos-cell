import { iCombined, iGlobalState, iMember } from "~~/helpers/interfaces";
import { constants } from "./constants";

export const memberName = (member: iMember | null) => member?.lastName ? `${member.prefix} ${member.firstName} ${member.lastName}` : 'Names'
export const folderName = (member: iMember) => `${member.firstName} ${member.lastName}`

export const imgSrc = (url: string) => url ? url : '/icons/avatar.svg'

export const editMemberUrl = (member: iMember | null) => {
  if (!member) return "/member"
  const firstName = member.firstName?.split(' ').join('-').toLowerCase()
  const lastName = member.lastName?.split(' ').join('-').toLowerCase()
  return `/${firstName}-${lastName}`
}

export const typeMember = (data: any) => data as iMember[]

export const minutesToMilliseconds = (minutes: string | undefined) => {
  if (!minutes) return 0
  const mins = Number(minutes)
  return 1000 * 60 * mins
}

const startAndEndTimes = (item: iCombined, type: string) => {
  const strDuration = type === constants.meetings ? item.duration : constants.birthdayMinDuration
  const duration = minutesToMilliseconds(strDuration)
  const dateStr = type === constants.meetings ? item.date : item.birthday
  const dateInstance = new Date(dateStr as string)
  const $mIdx = dateInstance.getMonth()
  const $date = dateInstance.getDate()
  const $year = new Date().getFullYear()
  const sTime = +new Date($year,$mIdx, $date)
  const eTime = sTime + duration
  return { sTime, eTime }
}

export const reorder = (list: iCombined[], type: string) => {
  let prev = null
  let next = null
  let live = null
  switch (type) {
    case constants.meetings:
      prev = list.filter(item => {
        const { eTime } = startAndEndTimes(item, constants.meetings)
        return Date.now() > eTime
      }).sort((a, b) => +new Date(a.date as string) - +new Date(b.date as string))

      next = list.filter(item => {
        const { sTime } = startAndEndTimes(item, constants.meetings)
        return Date.now() < sTime
      }).sort((a, b) => +new Date(a.date as string) - +new Date(b.date as string))

      live = list.filter(item => {
        const { sTime, eTime } = startAndEndTimes(item, constants.meetings)
        return Date.now() >= sTime && Date.now() <= eTime
      }).sort((a, b) => +new Date(a.date as string) - +new Date(b.date as string))

      return { prev, next, live, reordered: [ ...live, ...next, ...prev ] };
    case constants.members:
      prev = list.filter(item => {
        const { eTime } = startAndEndTimes(item, constants.members)
        return Date.now() > eTime
      }).sort((a, b) => +new Date(a.birthday as string) - +new Date(b.birthday as string))

      next = list.filter(item => {
        const { sTime } = startAndEndTimes(item, constants.members)
        return Date.now() < sTime
      }).sort((a, b) => +new Date(a.birthday as string) - +new Date(b.birthday as string))

      live = list.filter(item => {
        const { sTime, eTime } = startAndEndTimes(item, constants.members)
        return Date.now() >= sTime && Date.now() <= eTime
      }).sort((a, b) => +new Date(a.birthday as string) - +new Date(b.birthday as string))

      return { prev, next, live, reordered: [ ...live, ...next, ...prev ] };
    default:
      break;
  }
}

export const search = (term: string, list: iCombined[]) => {
  return list.filter(member => {
    return member.firstName?.toLowerCase().includes(term) ||
    member.lastName?.toLowerCase().includes(term) ||
    member.birthday?.toLowerCase().includes(term) ||
    member.email?.toLowerCase().includes(term) ||
    member.gender?.toLowerCase().includes(term) ||
    member.maritalStatus?.toLowerCase().includes(term) ||
    member.occupation?.toLowerCase().includes(term) ||
    member.phoneNumber?.toLowerCase().includes(term) ||
    member.role?.toLowerCase().includes(term)
  })
}

const replacePattern = (pattern: string, str: string) => {
  var re = new RegExp(pattern, 'g')
  return str.replace(re, '-')
}

export const id = (name: string, delim: string) => {
  var replaceApostrophe = replacePattern("'", name)
  var replaceAmpersand = replacePattern('&', replaceApostrophe)
  var replacePercent = replacePattern('%', replaceAmpersand)
  return replacePercent.toLowerCase().split(' ').join(delim)
}

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

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

export const fromLocalStorage = (key: string, json?: any) => {
  const localStateStr = localStorage.getItem(key)
  return localStateStr ? JSON.parse(localStateStr) : json
}

export const toLocalStorage = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data))

export const getUser = async (email: string | undefined) => {
    const supabase = useSupabaseClient()
    let { data: res, error } = await supabase
    .from(constants.members)
    .select("*")
    .eq("email", email)

    if (error) throw error
    return res
}

export const useGlobalState = () => {
  const globalState = useState<iGlobalState>("global")

  const setGlobalState = (value: iGlobalState) => {
    globalState.value = { ...globalState.value, ...value }
  }

  return { globalState, setGlobalState }
}