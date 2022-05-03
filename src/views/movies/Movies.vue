<template>
  <div v-if="!error">
    <div class="row" v-if='movies'>
        <div class="flex xs12 sm6 md6 lg4 p-[15px]" v-for="movie in movies" :key="movie.id">
            <MovieItem :image="movie.poster" :title="movie.title" :id="movie.id" :genre="movie.genre"/>
        </div>
    </div>
    <div v-else-if='complete'>
      <UserMessage type="warning" :message="$t('noDataMessage')" :outline="true" />
    </div>
    <div v-if='complete' class="button-container fixed right-0 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" icon="add" class="mr-4 top-[90%]" to="/movies/new" />
        </div>
    </div>
  </div>
</template>
<script>

import doRequest from '../../utils/doRequest'
import MovieItem from '../../components/MovieItem'
import UserMessage from '../../components/UserMessage'
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
    name:'MoviesView',
    components:{ MovieItem, UserMessage },
    setup() {

        const { t } = useI18n();
        const complete = ref(false)
        const { data : movies, load, error } = doRequest('movies');
        const store = useStore();

        onMounted(()=> {

          // Indicamos que se está cargando el componente hasta que tengamos toda la información para mostrar
          store.commit('setLoading', true);

          // Pones el título de películas a la cabecera
          store.commit('changeTitle', t('movies'));

          // Mostramos el botón de menú
          store.commit('setShowMenuButton', true)
        })

        // Procedemos a la carga de las películas
        load(true /* showErrorOnWindow */);

        watch(movies, () => {

          // Indicamos que se ha hecho la carga correctamente y mostramos así la pantalla (haya o no registros)
          complete.value = true;

          // Indicamos que se ha terminado la carga
          store.commit('setLoading', false);
        })
        
        return { movies, error, complete, t  }
    }
}
</script>
<style>

</style>