<template>
    <div>
        <ul>
            <TodoItem
                v-for="eOA of test1"
                v-bind:test3="eOA"
            />
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
