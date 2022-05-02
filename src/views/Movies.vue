<template>
    <div v-if='!complete' class="fixed w-full">
      <LoadingComponent />
    </div>
    <div v-else-if="error">
      <UserMessage type="danger" :title="$t('errorMsg')" :message="error" :outline="false" />
    </div>
    <div class="row" v-else-if='movies'>
        <div class="flex xs12 sm6 md6 lg4 p-[15px]" v-for="movie in movies" :key="movie.id">
            <MovieItem :image="movie.poster" :title="movie.title" :id="movie.id" :genre="movie.genre"/>
        </div>
    </div>
    <div v-else>
      <UserMessage type="warning" :message="$t('noDataMessage')" :outline="true" />
    </div>
    <div class="button-container fixed right-0 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" icon="add" class="mr-4 top-[90%]" to="/movies/new" />
        </div>
    </div>
</template>
<script>

import doRequest from '../utils/doRequest'
import MovieItem from '../components/MovieItem'
import LoadingComponent from '../components/LoadingComponent'
import UserMessage from '../components/UserMessage'
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
    name:'MoviesView',
    components:{ MovieItem, UserMessage, LoadingComponent },
    setup() {

        const { t } = useI18n();
        const complete = ref(false)
        const { data : movies, load, error } = doRequest('movies');
        const store = useStore();

        onMounted(()=> {

          store.commit('setShowMenuButton', true)
          load();
        })

        watch(movies, () => {
          complete.value = true
        })
        
        return { movies, error, complete, t  }
    }
}
</script>
<style>

</style>