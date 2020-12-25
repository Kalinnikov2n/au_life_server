class User {
  name: string
  avatar: string
  isAlive: boolean
  id: string
  constructor(info: { avatar: string; name: string }) {
    this.name = info.name || 'Лох'
    this.id = Date.now().toLocaleString()
    this.avatar = info.avatar || 'blm1'
    this.isAlive = true
  }
  kill = () => {
    this.isAlive = false
  }
}
export default User
