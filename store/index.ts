import { Session, User } from "@supabase/supabase-js"

const state = ref<{user: User | null}>({
  user: null
})

const methods = {
  setUser: (session: Session | null) => {
    state.value.user = session ? session.user : null
  }
}

export default {
  state,
  methods
}