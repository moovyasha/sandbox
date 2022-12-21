<template>
    <div>
        <ul>
            <TodoItem
                v-for="Elem of test1" 
                v-bind:test3 = "Elem"
            /> <!-- Elem придуманная переменная, которая проходит массив test1 и ее значение присваивается test3 -->
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['test1'], //здесь test1 свойство, которое передаем в главный файл App.vue в строку v-bind:test1 = "test2, если все верно понял"
    components: {
        TodoItem
    }
}
</script>
