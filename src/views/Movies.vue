<template>
    <h1>{{message}}</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="data == null"> no movies</div>
    <div class="row" v-if='data'>
        <div class="flex xs12 sm6 md6 lg4 p-[15px]" v-for="movie in data" :key="movie.id">
            <MovieItem :image="movie.poster" :title="movie.title" :id="movie.id" :genre="movie.genre" />
        </div>
    </div>
    <div class="button-container fixed right-0 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" icon="add" class="mr-4 top-[90%]" to="/movies/new" />
        </div>
    </div>
</template>
<script>

import { onMounted } from '@vue/runtime-core';
import getData from '../utils/getData'
import MovieItem from '@/components/MovieItem'

export default {
    name:'MoviesView',
    components:{MovieItem},
    setup() {
        const message = 'Movies!';
        const {data, load, error} = getData()

        load();
        
        onMounted(() => {
            console.log('onMounted!')
        })
        return { message, data, error }
    }
}
</script>
<style>

</style>