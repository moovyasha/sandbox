<template>
    <div>
        <ul>
            <TodoItem
                v-for="(elOfList, i) of taskList1" 
                v-bind:elOfList = "elOfList"
                v-bind:index ="i"
                v-on:removeItem="removeLi"/> <!-- v-for позволяет  отрисовать массив + пробег по массиву (как цикл for). elOfList - ссылка на элемент массива, taskList1 - массив. -->
            <!-- v-on служит для обработки событий v-on:click, change и др, можно назначать свои, но тогда необходимо указать их в methods. -->
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['taskList1'], //здесь taskList1 свойство, которое передаем из главного файла App.vue в строке v-bind:taskList1 = "taskList2", где taskList1 принимает значения из массива taskList2
    components: {
        TodoItem
    },
    methods: {
        removeLi(id) {
            this.$emit('removeItem',id)
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
</style>