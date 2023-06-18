
import { create } from 'zustand'

export interface User {
  username: String | null,
  token: String | null,
}

const initialUser: User = {
  username: null,
  token: null,
}

interface UserStore {
  user: User,
  setUser: (userData: User) => void,
  logoutUser: () => void,
}

const useUserStore = create<UserStore>((set) => ({
  user: initialUser,
  setUser: (userData: User) => set(() => ({ user: userData })),
  logoutUser: () => set(() => ({ user: initialUser })),
}))

export { useUserStore }