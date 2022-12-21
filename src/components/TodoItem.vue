<template>
    <li>{{test3.title}}</li>
</template>

<script>
export default {
    props: {
        test3: {
            type: Object,
            required: true
        }
    }
}
</script>