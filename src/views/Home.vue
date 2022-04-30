<template>
    <h1>{{message}}</h1>
</template>
<script>
export default {
    name:'HomeView',
    setup() {
        const message = 'HOME!'
        return { message }
    }
}
</script>
<style>

</style>