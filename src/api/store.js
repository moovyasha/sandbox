import { createStore } from 'vuex'

const store = createStore({
  actions: {
    async fetchTasks(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4') //сделали лимит вывода на 3 (?_limit=3)
      const tasks = await res.json()
      ctx.commit('updateTasks', tasks)
    }
  },
  mutations: {
    updateTasks(state, tasks) {
        state.taskList = tasks
    }
  },
  state: {
    taskList: []
  },
  getters: {
    allTasks(state) {
      return state.taskList
    }
  }
})

export default store
