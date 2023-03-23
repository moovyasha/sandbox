<template>
  <div>
    <div>{{ getTasks }}</div>
    <h2>Todo</h2>
    <!-- <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select> -->
    <VisibleForm
      v-if="show"
      :show="show"
      :editedItem="editedItem"
      @onCancel="onCancel"
      @toggleVisibleForm="toggleVisibleForm"
      @onSubmit="onSubmit"
      @onEditItem="onEditItem"
    />

    <button :title="tipAdd" @click="editItem()" class="button-add">
      <img src="@/assets/AddTask.png" />
    </button>

    <!-- <Loader v-if="loading" /> -->

    <ul v-if="allTasks && allTasks.length">
      <TodoItem v-for="(task, i) of allTasks" :task="task" @removeTask="removeTask" @completeTask="completed" :indexTask="i" @editItem="editItem" />
    </ul>
  </div>
</template>

<script>
import VisibleForm from './VisibleForm.vue'
import TodoItem from '@/components/TodoItem.vue'
import Loader from '@/components/Loader.vue'
import getTasks from '@/api/tasksFromSite.js'

export default {
  data() {
    return {
      // taskList: [],
      loading: true, //для отображения Loader'a
      filter: 'all',
      show: false,
      editedItem: undefined,
      tipAdd: 'Add Task',
      defaultTask: {
        id: '',
        title: '',
        completed: ''
      },
      getTasks: null
    }
  },

  components: {
    TodoItem,
    Loader,
    VisibleForm
  },
  methods: {
    removeTask(index) {
      this.$store.commit('tasks/removeTask', index)
    },
    completed(index) {
      this.$store.commit('tasks/statusTask', index)
    },
    onEditItem({ key, value }) {
      this.editedItem[key] = value
    },
    onCancel() {
      this.editedItem = undefined
      this.show = false
    },
    editItem(task) {
      if (task && task.id) {
        this.editedItem = { ...task }
      } else {
        this.editedItem = { ...this.defaultTask }
      }
      this.show = true
    },
    toggleVisibleForm(value) {
      this.show = value
    },
    onSubmit() {
      // console.log('onSubmit', this.editedItem)

      //проверка на введенный текст в полеs
      if (this.editedItem.id === '') {
        if (this.editedItem.title.trim()) {
          const newTask = {
            id: Date.now(),
            title: this.editedItem.title,
            completed: false
          }
          this.$store.commit('tasks/addTask', newTask)
        } /* создали новый элемент */
      } else {
        if (this.editedItem.title.trim()) {
          this.$store.commit('tasks/editTask', this.editedItem)
        }
      }
      this.toggleVisibleForm(false)
    }
  },
  async mounted() {
    this.$store.dispatch('tasks/fetchTasks')
  },
  computed: {
    // filterTask() {
    //   if (this.filter === 'all') {
    //     return this.taskList
    //   }
    //   if (this.filter === 'completed') {
    //     return this.taskList.filter((t) => t.completed)
    //   }
    //   if (this.filter === 'not-completed') {
    //     return this.taskList.filter((t) => !t.completed)
    //   }
    // },

    allTasks() {
      return this.$store.state.tasks.taskList
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.button-add {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.modal-shadow {
  position: fixed;
  /* z-index: 9998; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000081;
  display: table;
}
.modal {
  background: #6db90a;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
