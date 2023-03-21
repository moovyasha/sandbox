import taskApi from '@/api/tasksFromSite.js'

export default {
  namespaced: true,
  actions: {
    async fetchTasks(ctx) {
      try {
        const { data } = await taskApi.getTasks()
        ctx.commit('updateTasks', data)
        // console.log(data)
      } catch (e) {
        console.log(e)
      }

      console.log(taskApi) 
      // в taskApi передается функция getTasks()
    }
  },
  mutations: {
    updateTasks(state, data) {
      state.taskList = data
    }
  },
  state: {
    taskList: []
  },
  getters: {
    // allTasks(state) {
    //   return state.taskList
    // }
  }
}
