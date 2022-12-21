<template>
    <li> {{ test4.title }} </li>
</template>

<script>
export default {
    props: {
        test4: {
            type: Object,
            required: true
        }
    }
}
</script>