<template>
  <div>
    <!-- <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select> -->
    <VisibleForm v-if="show" :show="show" :editedItem="editedItem" @onCancel="onCancel" @toggleVisibleForm="toggleVisibleForm" @onSubmit="onSubmit" />

    <button :title="tipAdd" @click="editItem()" class="button-add">
      <img src="@/assets/AddTask.png" />
    </button>

    <Loader v-if="loading" />
    <div v-else></div>
    <ul>
      <!-- если loading true, то показывать значок загрузки -->
      <TodoItem
        v-for="(task, i) of taskList"
        :task="task"
        @removeTask="removeTask"
        @completeTask="completed"
        :indexTask="i"
        :show="show"
        @editItem="editItem"
      />

      <!-- v-for позволяет  отрисовать массив + пробег по массиву (как цикл for). task - ссылка на элемент массива, taskList - массив. -->
      <!-- v-on служит для обработки событий v-on:click, change и др, можно назначать свои, но тогда необходимо указать их в methods. -->
      <!-- также  v-on позволяет получать параметры из дочерних файлов. Здесь v-on:completeTask="completed" получили из TodoItem.vue, от туда его отправили через $emit -->
      <!-- с помощью v-bind я передаю в файл TodoItem массив в переменной task, для получения массива в TodoItem нужно прописать props: task: {type: Object, required: true} -->
      <!-- v-else-if="taskList.length" иначе если длина не равна 0, то отображает список и не показывает значок загрузки -->
      <!-- <p v-else>No task!</p> иначе при отсутствии записей выводить запись No task! -->
    </ul>
    <div v-if="taskList.length"></div>
    <p v-else>No Task!</p>
  </div>
</template>

<script>
import VisibleForm from './VisibleForm.vue'
import TodoItem from '@/components/TodoItem.vue'
import AddTask from '@/components/AddTask.vue'
import Loader from '@/components/Loader.vue'

export default {
  data() {
    return {
      taskList: [],
      loading: true, //для отображения Loader'a
      filter: 'all',
      show: false,
      editedItem: undefined,
      // test: 'undefined'
      tipAdd: 'Add Task',
      defaultTask: {
        id: '',
        title: '',
        completed: ''
      }
    }
  },
  props: ['taskList1'], //здесь taskList1 свойство, которое передаем из главного файла App.vue в строке v-bind:taskList1 = "taskList2", где taskList1 принимает значения из массива taskList2
  components: {
    TodoItem,

    Loader,
    VisibleForm
  },
  methods: {
    removeTask(index) {
      const deleteTask = this.taskList.findIndex((item) => item.id === index)
      this.taskList.splice(deleteTask, 1)
    },
    // addTask(add) {
    //   const index = this.taskList.findIndex((item) => item.id === add.id)
    //   // console.log(index)
    //   if (index !== -1) {
    //     this.taskList[index] = add
    //   } else {
    //     this.taskList.push(add)
    //   }
    // },
    completed(index) {
      const complete = this.taskList.findIndex((item) => item.id === index)
      this.taskList[complete].completed = !this.taskList[complete].completed
    },
    onCancel() {
      console.log('onCancel')
      this.editedItem = undefined
      this.show = false
    },
    editItem(task) {
      if (task && task.id) {
        this.editedItem = task
      } else {
        this.editedItem = { ...this.defaultTask }
      }
      this.show = true
    },
    toggleVisibleForm(value) {
      this.show = value
    },
    onSubmit() {
      console.log('onSubmit')
      console.log(this.editedItem)

      //проверка на введенный текст в полеs
      if (this.editedItem.id === '') {
        const newTask = {
          id: Date.now(),
          title: this.editedItem.title,
          completed: false
        }/* создали новый элемент */
        if (newTask.title !== '') {
          
          this.taskList.push(newTask)
          
        }
      } else {
        console.log('find')
      }

      /* передали в emit newTask */
      // this.title = ''
      /*  обнуление значения поля после добавления задачи */

      this.toggleVisibleForm(false)
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3') //сделали лимит вывода на 3 (?_limit=3)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.taskList = json
          this.loading = false //когда прогрузятся данные с сервака, то переменной присвоится false и значок загрузки пропадет.
        }, 1000)
      })
  },
  computed: {
    filterTask() {
      if (this.filter === 'all') {
        return this.taskList
      }
      if (this.filter === 'completed') {
        return this.taskList.filter((t) => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.taskList.filter((t) => !t.completed)
      }
    }
  } // computed - вычисляемое свойство, создали функцию на фильтрование тасков, обязательно создаем переменную filter: 'all' (как начальное значение). в теге <selector> сделали привязку к переменной filter, для мониторинга ее значения. чтобы перерисовывал список тасков, то filterTask нужно подставить в TodoItem v-for="(task, i) of filterTask" вместо начального taskList и также в div v-if="filterTask.length", чтбы мониторил длину массива.
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
