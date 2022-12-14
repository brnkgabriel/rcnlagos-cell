import { H3Event, getQuery } from "h3"
import { supabase } from "../lib/supabase"
import { iMember } from "~~/helpers/interfaces"

interface iQuery {
  orderBy: string
}

export default defineEventHandler(async (event: H3Event) => {

  try {
    const query = getQuery(event) as any
    console.log("query is", JSON.stringify(query))

    const response = await supabase
    .from("members")
    .select()

    const data: iMember[] = response.data as iMember[]

    return data
  } catch (error: any) {
    return { error: error.message }
  }
})