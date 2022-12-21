<template>
    <div>
        <ul>
            <TodoItem
            v-for="anyEl of test2"
            v-bind:test3="test"/>   
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['test2'],
    components: {
        TodoItem
    }
}
</script>
