import User from '../user/User'

export let users = []
export interface UserType {
  name: string
  avatar: string
}
export const addUser = (user: UserType) => users.push(new User(user))
