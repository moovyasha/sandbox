<template>
    <li>
        <span v-bind:class="{done: elOfList.completed}">
            <input type="checkbox" 
            v-on:change = "elOfList.completed = !elOfList.completed">
            <strong>{{elOfList.id}}</strong>
            {{ elOfList.title }}
        </span>
        <button class = "remove" @click="$emit('removeItem', elOfList.id)">
            &times;
        </button>
    </li>    
</template>

<script>
export default {
    props: {
        elOfList: {
            type: Object,
            required: true
        }
    }
}
</script>


<style scoped>
li {
    border: 1px solid magenta;
    display: flex;
    justify-content: space-between;
    padding: 12px 43px;
    margin-bottom: 5px;
    width: auto;
}
.done {
    text-decoration: line-through;
}
</style>