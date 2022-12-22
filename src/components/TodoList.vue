<template>
    <div>
        <ul>
            <TodoItem
                v-for="Elem of arrayList" 
                :elOfList = "Elem"
                v-on:remove-item="removeLI"
            /> <!-- Elem придуманная переменная, которая проходит массив test1 и ее значение присваивается test3 -->
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['arrayList'], //здесь test1 свойство, которое передаем в главный файл App.vue в строку v-bind:test1 = "test2, если все верно понял"
    components: {
        TodoItem
    },
    methods: {
        removeLI(id) {
            console.log(id)
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