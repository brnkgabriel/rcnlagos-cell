import { readBody } from "h3"
import { iUpload } from "~~/helpers/interfaces"
import { supabase } from "../lib/supabase"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event) as iUpload

    const filePath = `${body.path}/${body.name}`
    
    const res = await fetch(body.file)
    const blob = await res.blob()

    const response = await supabase.storage
      .from("pictures")
      .upload(filePath, blob, {
        contentType: body.type,
        upsert: true,
      })

    return {
      data: response.data,
      error: response.error?.message,
    }
  } catch (error: any) {
    return { error: error.message }
  }
})