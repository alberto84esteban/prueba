<template>
  <div v-if='complete' class="w-full pt-[20px] p-2 row text-xl">

    <!-- Título -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('title') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="title"
          :autosize="true"
          color="black"
          :placeholder="$t('title')"
        />
      </div>
    </div>

    <!-- Poster -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('poster') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="poster"
          :autosize="true"
          color="black"
          :placeholder="$t('poster')"
        />
      </div>
    </div>

    <!-- Géneros -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('genres') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="new_genre"
          :autosize="true"
          color="black"
          :placeholder="$t('add_genre')"
          @keydown="insertGenre">
          <template #appendInner>
            <va-icon
              name="add"
            />
          </template>
        </va-input>
        <div class="block overflow-x-scroll	">
          <va-chip v-for='(genre, index) in genres' :key="index" class="w-fit mr-1">
            #{{genre}}<va-icon name="close" color="white" size="small" class="ml-2 pointer"  @click="removeGenre(genre)"/>
          </va-chip>
        </div>
      </div>
    </div>

    <!-- Actores -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('actors') }}</span>
        <va-select
          class="mb-2"
          bordered
          :options="actors"
          v-model="actor"
          multiple
          color="black"
          :placeholder="$t('select_actor')"
        />
      </div>
      <div class="block overflow-x-scroll	">
        <va-chip v-for='(act, index) in actor' :key="index" class="w-fit mr-1">
          {{ act.text }}<va-icon name="close" color="white" size="small" class="ml-2 pointer" @click="removeActor(act)"/>
        </va-chip>
      </div>
    </div>

    <!-- Estudio -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('company') }}</span>
        <va-select
          class="mb-2"
          bordered
          :options="companies"
          v-model="company"
          color="black"
          :placeholder="$t('select_company')"
        />
      </div>
    </div>

    <!-- Año -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('year') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="year"
          :autosize="true"
          color="black"
          type="number"
          :placeholder="$t('year')"
        />
      </div>
    </div>

    <!-- Duración -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('duration') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="duration"
          :autosize="true"
          color="black"
          type="number"
          :placeholder="$t('duration')"
        />
      </div>
    </div>

    <!-- Puntuación -->
    <div class="flex flex-col xs12 sm6 md6 lg6 px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('rating') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="imdbRating"
          :autosize="true"
          color="black"
          type="number"
          :placeholder="$t('rating')"
        />
      </div>
    </div>
    <div class="w-full text-center mt-[15px]">
      <va-button :disabled="disabled" class="flex-none" icon-right="done" :rounded="false" @click="handleUpdate" >{{$t('update')}}</va-button>
    </div>
  </div>
</template>
<script>

import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import { useRouter } from 'vue-router'
import doRequest from '../../utils/doRequest'

export default {
  name:'FormMovie',
  props:['id'],
  components:{},

  setup(props) {
    const { t } = useI18n();
    const store = useStore();
    const title = ref(null);      
    const poster = ref(null);
    const new_genre = ref(null);
    const genres = ref([]);
    const actors = ref([])
    const companies = ref([])
    const actor = ref([])
    const company = ref(null)
    const year = ref(null);
    const duration = ref(null);
    const imdbRating = ref(null);
    const router = useRouter();
    const disabled = ref(false);
    const complete = ref(false)
    let actorsReady = ref(false);
    let companyReady = ref(false);

    let { data : movie, load : loadMovie } = doRequest(`movies/${props.id}`);

    // Estructura para consultar de forma ràpida las películas del estudio elegido para posterior actualización
    let companiesData = null;

    const ready = computed(()=> {
      console.log('computed!', actorsReady.value, companyReady.value, actorsReady.value && companyReady.value)
      return actorsReady.value && companyReady.value
    })

    // Carga inicial de los datos de la película
    onMounted(() => {
      
      // Indicamos que se está cargando el componente hasta que tengamos toda la información para mostrar
      store.commit('setLoading', true);

      // Escondemos el botón de menú de la cabecera y mostramos el de vuelta atrás
      store.commit('setShowMenuButton', false);

      // Cargamos actores para mostrar en el selector
      loadActors();

      //Cargamos estudios para mostrar en el selector
      loadCompanies();

    });

    /**
     * Carga de los actores
     */
    const loadActors = async () => {

      const raw = await axios.get(`http://localhost:3000/actors`);

      // Montamos el selector solo con el nombre y apellido de los actores devueltos por la petición
      raw.data?.forEach(element => {
        actors.value.push({ value : element.id, text: `${element.first_name} ${element.last_name}`});
      });
      actorsReady.value = true;
    }

    /**
     * Carga de las compañías
     */
    const loadCompanies = async () => {
      const raw = await axios.get(`http://localhost:3000/companies`);

      // Guardamos los datos de los estudios para poder luego actualizar con la película creada
      companiesData = raw.data;

      // Montamos el selector solo con el nombre y de los estudios devueltos por la petición
      //aprovechamos para ver a qué estudio pertenece la película
      raw.data?.forEach(element => {
        console.log('element', element)
        companies.value.push({ value : element.id, text: `${element.name}`});

        console.log('COMPANY', element.movies, element.name)

        if (element.movies?.includes(parseInt(props.id))) {
          company.value = element.name
        }
      });

      companyReady.value = true;
    }

    /**
     * Eliminamos el género seleccionado desde los 'chips'
     */
    const removeGenre = (genre) => {
      const index = genres.value.indexOf(genre);
      genres.value.splice(index,1);
    }

    /**
     * Eliminamos el actor seleccionado desde los 'chips'
     */
    const removeActor = (act) => {
      const index = actor.value.indexOf(act);
      actor.value.splice(index,1);
    };

    /**
     * Insertamos un nuevo género cuando damos 'enter' en el input
     */
    const insertGenre = (evt) => {
      if (evt.keyCode == 13) {
        genres.value.push(new_genre.value)
        new_genre.value = null;
      }
    }

    /**
     * Gestión del insert de la nueva película
     */
    const handleUpdate = async () => {

      // Deshabilitamos el botón de añadir película para evitar que se hagan más peticiones mientras se gestiona esta
      disabled.value = true;

      store.commit('setLoading', true);

      const actorData = []
      // Obtenemos los códigos de los actores
      actor.value.forEach(actor => actorData.push(actor.value));

      // Estructura que mandaremos a la bd con la información introducida
      const movie = {
        title : title.value, 
        poster: poster.value, 
        genre : genres.value, 
        year: year.value, 
        duration: duration.value, 
        imdbRating: imdbRating.value, 
        actors : actorData
      }

      const response = await axios.put(`http://localhost:3000/movies/${props.id}`, movie);

      if (response.status == 200) {

        // Miramos a ver si se ha modificado el estudio
        if (company.value) {
          console.log('companiesData', companiesData, 'find', company.value)
          const companyInfo = companiesData.find(comp => comp.name == company.value.text);
          if (!companyInfo.movies.includes(parseInt(props.id))) {

            // Datos de la compañía de la nueva película
            companyInfo.movies.push(props.id);
            const updResponse = await axios.put(`http://localhost:3000/companies/${companyInfo.id}`, companyInfo);

            if (updResponse.status == 200) {
              store.commit('setLoading', false);
              router.push(`/movie/${props.id}`)
            }
          } 
        }
      }
    }

    watch(movie, (value) => {

      // Cuando cargamos los 
      title.value = value.title;
      poster.value = value.poster;
      genres.value = value.genre;
      // actor.value = value.actors;
      // company.value = value.company;
      year.value = value.year;
      duration.value = value.duration;
      imdbRating.value = value.imdbRating;

      // Si ya hemos cargado los actores, procedemos a 'traducir' los que vienen de bd. Aquí solo tenemos ids
      // Lo ideal sería hacer una join en bd y traer ya los datos desde el endopoint. Por ahora, lo tratamos así
      if (actorsReady.value) {

        value.actors?.forEach(element => {

          const found = actors.value.find(act => act.value == element);

          // En caso de haber algún actor mal parametrizado, no lo dejaré
          if (found) {
            actor.value.push({ value : element.id, text: `${found?.text}`});
          }
        });
      }
      
      //Cambiamos el título de la cabecera y mostramos el título de nueva película
      store.commit('changeTitle', value.title);

      store.commit('setLoading', false);
      complete.value = true;
    })

    watch(ready, () => {
      // Cargamos información de la película una vez cargados películas y estudios
      loadMovie();
    });

    return { t, title, poster, new_genre, genres, actors, actor, removeActor, removeGenre, insertGenre, company, companies, year, duration, imdbRating, handleUpdate, complete, disabled }
  }
}
</script>
<style>

</style>