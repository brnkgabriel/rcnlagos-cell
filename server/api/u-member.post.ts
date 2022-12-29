import { H3Event, readBody } from "h3"
import { supabase } from "../lib/supabase"
import { iMember } from "~~/helpers/interfaces"

export default defineEventHandler(async (event: H3Event) => {

  try {
    const body = await readBody(event) as any
    const member: iMember = body as iMember

    console.log("member is", member)

    const response = await supabase
      .from('members')
      .update(member)
      .eq('email', member.email)

    return response
  } catch (error: any) {
    return { error: error.message }
  }
})