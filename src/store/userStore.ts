
import { create } from 'zustand'
import { deleteLocalStorage, getFromLocalStorage, setLocalStorage } from '../helpers/localstorage'

export interface User {
  name: String | null,
  token: String | null,
}

interface UserStore {
  user: User,
  setUser: (userData: User) => void,
  logoutUser: () => void,
}

const nullUser = {
  name: null,
  token: null,
}

const initialUser = (
  () => {
    const savedUser = getFromLocalStorage()
    if (savedUser) {
      return savedUser
    } else {
      return nullUser;
    }
  }
)();

const useUserStore = create<UserStore>((set) => ({
  user: initialUser,
  setUser: (userData: User) => set(() => {
    setLocalStorage(userData);
    return { user: userData }
  }),
  logoutUser: () => set(() => {
    deleteLocalStorage();
    return { user: nullUser }
  }),
}))

export { useUserStore }