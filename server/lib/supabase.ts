import { createClient } from "@supabase/supabase-js"

const key = process.env.SUPABASE_KEY as string
const url = process.env.SUPABASE_URL as string

export const supabase = createClient(url, key)