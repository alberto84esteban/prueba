<template>
    <h1>{{message}}</h1>
</template>
<script>

import { onMounted } from '@vue/runtime-core';
// import getData from '../utils/getData'

export default {
    name:'MoviesView',
    components:{},
    setup() {
        const message = 'New Movie!';
        // const {data, load, error} = getData()

        // load();
        
        return { message }
    }
}
</script>
<style>

</style>