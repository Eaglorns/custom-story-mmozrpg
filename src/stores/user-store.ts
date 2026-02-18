import { createStore } from "zustand/vanilla";

export type UserState = {
  name: string,
  email: string
}

export type UserActions = {
  setName: (name: string) => void
  setEmail: (email: string) => void
}

export type UserStore = UserState & UserActions

export const defaultInitState: UserState = {
  name: "",
  email: "",
}

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
  }))
}
