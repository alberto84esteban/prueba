<template>
    <div v-if='!complete' class="fixed w-full">
      <LoadingComponent />
    </div>
    <div v-if="error">
      <UserMessage type="danger" title="Error" :message="error" :outline="false" />
    </div>
    <div class="row" v-if='data'>
        <div class="flex xs12 sm6 md6 lg4 p-[15px]" v-for="movie in data" :key="movie.id">
            <MovieItem :image="movie.poster" :title="movie.title" :id="movie.id" :genre="movie.genre" />
        </div>
    </div>
    <div v-else>
      <UserMessage type="warning"  :message="noDataMessage" :outline="true" />
    </div>
    <div class="button-container fixed right-0 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" icon="add" class="mr-4 top-[90%]" to="/movies/new" />
        </div>
    </div>
</template>
<script>

import getData from '../utils/getData'
import MovieItem from '../components/MovieItem'
import LoadingComponent from '../components/LoadingComponent'
import UserMessage from '../components/UserMessage'
import { ref, watch } from 'vue';

export default {
    name:'MoviesView',
    components:{ MovieItem, UserMessage, LoadingComponent },
    setup() {

        const complete = ref(false)
        const { data, load, error } = getData()
        const noDataMessage = 'No se han encontrado películas'

        load();

        watch(data, (prv) => {
          complete.value = true
          console.log('watch2!', prv, prv.lenth)
        })
        
        return { data, error, complete, noDataMessage  }
    }
}
</script>
<style>

</style>