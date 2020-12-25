export const tasks = [
  {
    name: 'задание1',
    info: 'на кухне',
    id: `задание1${Date.now().toString()}`,
  },
  {
    name: 'задание2',
    info: 'в туалете',
    id: `задание2${Date.now().toString()}`,
  },
  {
    name: 'задание3',
    info: 'где-то',
    id: `задание3${Date.now().toString()}`,
  },
  {
    name: 'задание4',
    info: 'где-то',
    id: `задание4${Date.now().toString()}`,
  },
  {
    name: 'задание5',
    info: 'где-то',
    id: `задание5${Date.now().toString()}`,
  },
  {
    name: 'задание6',
    info: 'где-то',
    id: `задание6${Date.now().toString()}`,
  },
  {
    name: 'задание7',
    info: 'где-то',
    id: `задание7${Date.now().toString()}`,
  },
  {
    name: 'задание8',
    info: 'где-то',
    id: `задание8${Date.now().toString()}`,
  },
  {
    name: 'задание9',
    info: 'где-то',
    id: `задание9${Date.now().toString()}`,
  },
  {
    name: 'задание10',
    info: 'где-то',
    id: `задание10${Date.now().toString()}`,
  },
  {
    name: 'задание11',
    info: 'где-то',
    id: `задание11${Date.now().toString()}`,
  },
  {
    name: 'задание12',
    info: 'где-то',
    id: `задание12${Date.now().toString()}`,
  },
  {
    name: 'задание13',
    info: 'где-то',
    id: `задание13${Date.now().toString()}`,
  },
]
export const getRandomTasks = (counter: number) => {
  let allTasks = [...tasks]
  let result = []
  for (let i = 0; i < counter; i++) {
    let ind = Math.floor(Math.random() * allTasks.length)
    let item = allTasks[ind]
    result.push(item)
    allTasks.splice(ind, 1)
  }
  return result
}
