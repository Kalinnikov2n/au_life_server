import { addUser, users } from '../mocks/users'

export const initEvent = ({ user }, socket: any) => {
  addUser(user)
  socket.emit('newUser', { users: users })
}
