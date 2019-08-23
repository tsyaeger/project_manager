import api from './httpClient'
import todoData from '../standinData.json'

export const getTasks = () => todoData

export const completeTask = id => {
  let completedTask = todoData.filter((task) => {
    return task["id"] == id
  })
  completedTask[0]["completedAt"] = new Date().toLocaleString()
}

export const getGroups = () => selectGroups()

export const getGroup = id => selectGroups(id)



//SERVER REQUESTS
// export const getGroups = () => api.get('/groups')
// export const getGroup = (id) => api.get(`/groups/${id}`)
// export const getTasks = () => api.get('/tasks')
// export const updateTask = id => {
// 	return api.put(`/data/${id}`, {
// 		completedAt: new Date().toLocaleString()
// 	})
// }



////BELOW FNs WOULD BE HANDLED BY SERVER

//returns groups obj or single group if id param is passed
const selectGroups = async (group_id) => {
  const data = await getTasks()
  const groups = groupbyGroupName(data)
  if(group_id){
	  return Object.entries(groups).filter((g) => g[1].id == group_id)[0]
  } else {
	  return Object.entries(groups).map((group) => group[1])
  }
}

//creates group hash with summary stats and group tasks
const groupbyGroupName = (data) => {
  let id = 0
  return data.reduce((acc, i) => {
    let g = i["group"]
    let c = i["completedAt"] ? 1 : 0
    if (acc.hasOwnProperty(g)) {
      acc[g].total += 1
      acc[g].completed += c
      acc[g].tasks.push(i)
    } else {
      acc[g] = {"id": id, "name": g, "total": 1, "completed": c, "tasks": [i]}
      id += 1
    }
    return acc
  },{})
}

//return dependency status of a task
export const checkTaskStatus = (dependencyIds) => {
  let dependencies = todoData.filter((t) => dependencyIds.includes(t.id))
  let incomplete = dependencies.filter((d) => d.completedAt === null)
  return incomplete.length == 0
}
