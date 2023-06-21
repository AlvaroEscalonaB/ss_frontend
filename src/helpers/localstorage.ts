import type { User } from "../store/userStore";

export const setLocalStorage = (userData: User) => {
  localStorage.setItem('ss_user', JSON.stringify(userData));;
}

export const getFromLocalStorage = (): User | null => {
  const rawUser = localStorage.getItem('ss_user')
  if (rawUser) {
    const user: User | null = JSON.parse(rawUser);
    return user
  }
  return null
}

export const deleteLocalStorage = () => {
  localStorage.removeItem('ss_user')
}