import User from 'user/User'

class Civilian extends User {
  name: string
  avatar: string
  isAlive: boolean
  id: string
  tasks: {
    name: string
    info: string
    id: string
  }[]
  completedTasks: string[]
  constructor(info: {
    avatar: string
    name: string
    id: string
    tasks: {
      name: string
      info: string
      id: string
    }[]
  }) {
    super({ avatar: info.avatar, name: info.name })
    this.id = info.id
    this.tasks = info.tasks
    this.completedTasks = []
  }
  kill = () => {
    this.isAlive = false
  }
  completeTask = (taskId: string) => {
    this.completedTasks.push(taskId)
  }
}
export default Civilian
