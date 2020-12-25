import User from 'user/User'

class Imposter extends User {
  name: string
  avatar: string
  isAlive: boolean
  id: string
  tasks: {
    name: string
    info: string
    id: string
  }[]
  killKD: string
  constructor(info: {
    avatar: string
    name: string
    id: string
    tasks: {
      name: string
      info: string
      id: string
    }[]
    killKD: string
  }) {
    super({ avatar: info.avatar, name: info.name })
    this.id = info.id
    this.tasks = info.tasks
    this.killKD = info.killKD
  }
  kill = () => {
    this.isAlive = false
  }
}
export default Imposter
