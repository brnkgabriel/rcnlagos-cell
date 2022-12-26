import { createClient } from "@supabase/supabase-js"

const key = process.env.SUPABASE_KEY as string
const url = process.env.SUPABASE_URL as string

export const supabase = createClient(url, key)

export const api = {
  // database
  getData: async (table: string, column: string) => {
    const { data: res, error } = await supabase
    .from(table).select(column ?? "*")

    if (error) throw error
    return res
  },
  addData: async (table: string, data: any) => {
    const { data: res, error } = await supabase
    .from(table).insert(data)
    
    if (error) throw error
    return res
  },
  updateData: async (table: string, id: string, data: any) => {
    const { data: res, error } = await supabase
    .from(table).update(data).match({ id })
    
    if (error) throw error
    return res
  },
  deleteData: async (table: string, id: string) => {
    const { data: res, error } = await supabase
    .from(table).delete().match({ id })

    if (error) throw error
    return res
  },

  // storage
  createBucket: async (name: string, isPublic: boolean) => {
    const { data: res, error } = await supabase.storage
    .createBucket(name, { public: isPublic ?? false })

    if (error) throw error
    return res
  },
  uploadFile: async (bucket: string, file: any) => {
    const { data: res, error } = await supabase.storage
    .from(bucket).upload(`public/${file.name}`, file)

    if (error) throw error
    return res
  },
  downloadFile: async (bucket: string, file: any) => {
    const { data: res, error } = await supabase.storage
    .from(bucket).download(file)

    if (error) throw error
    return res
  },
  deleteFile: async (bucket: string, file: any) => {
    const { data: res, error } = await supabase.storage
    .from(bucket).remove([file])

    if (error) throw error
    return res
  },
  getUrl: async (bucket: string, file: any) => {
    const { data: res } = await supabase.storage
    .from(bucket).getPublicUrl(file)
    return res
  },

  // auth
  signUp: async (email: string, password: string) => {
    const { data: res, error } = await supabase.auth.signUp({ email, password })

    if(error) throw error
    return res
  },
  signInWithMagicLink: async (email: string) => {
    const { data: res, error } = await supabase.auth.signInWithOtp({ email })

    if (error) throw error
    return res
  },
  signIn: async (email: string, password: string) => {
    const { data: res, error } = await supabase.auth
    .signInWithPassword({ email, password })

    if (error) throw error
    return res
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut()

    if (error) throw error
    return "successfully signed out"
  }
}
