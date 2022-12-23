<template>
    <div>
        <ul>
            <TodoItem
                v-for="elOfList of taskList" 
                :elOfList = "elOfList"
                v-on:removeItem="removeLi"
            /> <!-- Elem придуманная переменная, которая проходит массив test1 и ее значение присваивается test3 -->
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['taskList'], //здесь test1 свойство, которое передаем в главный файл App.vue в строку v-bind:test1 = "test2, если все верно понял"
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