<template>
    <li>{{ eOA1.title }}</li>
</template>

<script>
export default {
    props: {
        eOA1: {
            type: Object,
            required: true
        }
    }
}
</script>