<template>
    <h1>{{message}}</h1>
</template>
<script>

// import doRequest from '../utils/doRequest'

export default {
    name:'MoviesView',
    components:{},
    setup() {
        const message = 'New Movie!';
        // const {data, load, error} = doRequest()

        // load();
        
        return { message }
    }
}
</script>
<style>

</style>