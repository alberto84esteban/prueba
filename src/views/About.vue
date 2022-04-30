<template>
    <h1>{{message}}</h1>
</template>
<script>
export default {
    name:'AboutView',
    setup() {
        const message = 'About!'
        return { message }
    }
}
</script>
<style>

</style>