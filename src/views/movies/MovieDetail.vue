<template>
  <div>
    <!--
    <div v-if="!ready" class="fixed w-full">
      <LoadingComponent />
    </div>
    <div v-else-if="movieError">
      <UserMessage type="danger" :title="$t('errorMsg')" :message="movieError" :outline="false" />
    </div> 
    <div v-else-if="!movie">
      <UserMessage type="warning" :message="$t('noDataMessage')" :outline="true" />
    </div> -->
    <div v-if='movie' class="w-full pt-[20px] p-2 row">
      <div class="flex flex-col xs12 sm12 md6 lg6 mt-3">
        <div class="w-[90%] m-auto">
          <va-image
            v-if="movie.poster"
            :src="movie.poster"
            style="height: 200px;"
            class="m-auto p-1"
          /> 
          <va-image
            v-else
            :src="noImage"
            style="height: 200px;"
            class="w-[90%] p-1"
          />
        </div>

        <div class="w-[90%] m-auto pt-4">
          <div class="flex">
            <div class=" flex flex-1 flex-col">
              <span>{{ $t('rating') }}</span>
              <span class="text-sm text-slate-400">{{ movie.imdbRating }}</span>
            </div>
            <div class="flex flex-1 flex-col text-right">
              <span>{{ $t('duration') }}</span>
              <span class="text-sm text-slate-400 ">{{ timeReadable }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col xs12 sm12 md6 lg6">
        <div class="w-[90%] m-auto">
          <div class="mt-3 flex flex-1 flex-col">
            <div class="border-solid border-b-[1px] border-black">
              <span>{{ $t('actors') }}</span>
            </div>
            <span v-for="actor in actorList" :key="actor.key" class="mt-2 text-sm text-slate-400">{{ actor.first_name }} {{ actor.last_name }} </span>
          </div>
          <div class="mt-3 flex flex-1 flex-col">
            <div class="border-solid border-b-[1px] border-black">
              <span>{{ $t('company') }}</span>
            </div>
            <span class="mt-2 text-slate-400 text-sm"> {{ company }} </span>
          </div>
          <div class="mt-3 flex flex-1 flex-col">
            <div class="border-solid border-b-[1px] border-black">
              <span>{{ $t('genres') }}</span>
            </div>
            <div class="flex">
              <span class='mt-2 text-sm' v-for="text in movie.genre" :key="text">#{{text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container fixed right-0 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" color="danger" icon="delete" class="mr-4 top-[90%]" @click="showWindow = true" />
        </div>
      </div>
      <div class="button-container fixed right-16 top-0 h-[100vh]">
        <div class="relative h-full">
            <va-button size="large" color="success" icon="edit" class="mr-4 top-[90%]" @click="handleEdit" />
        </div>
      </div>
      <va-modal v-model="showWindow" :mobile-fullscreen='false' :message="$t('confirmation')" :overlay="true" @ok='handleDelete' />
    </div>

  </div>
</template>
<script>

import { onMounted, watch, computed, ref } from 'vue'
import { useStore } from 'vuex';
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import doRequest from '../../utils/doRequest'
import noImage from '../../assets/noImage.png'
//import LoadingComponent from '../../components/LoadingComponent'
//import UserMessage from '../../components/UserMessage'
import { useRouter } from 'vue-router'

export default {
    props: ['id'],
    components: {/*LoadingComponent, UserMessage */ },
    setup(props) {
        
        const { t } = useI18n();
        const router = useRouter();
        const actorList = ref([]);
        const company = ref(null);
        const showWindow = ref(false);
        const ready = ref(false);
        let { data : movie, load : loadMovie, error : movieError } = doRequest(`movies/${props.id}`);
        const store = useStore();
        let duration;

        let movieCompleted = false;
        let actorsCompleted = false;
        let companyCompleted = false;

        // Obtenemos el número de minutos a formato [h m]
        const timeReadable = computed(()=> {
          const hours = Math.floor(duration/60);
          const minutes = duration - (hours * 60);

          return `${hours}h ${minutes}m`
        });
        
        //Cargamos la lista de los nombres de los actores
        const loadActors = async (list) => {

          let query = "";
          for (const key in list) {
            const actor = list[key];
            query += query.length == 0 ? "?" : "&"
            query += `id=${actor}`
          }

          try {
            let res = await axios.get(`http://localhost:3000/actors${query}`)
            actorList.value = res.data;
            actorsCompleted = true;
            checkIsReady();
          } catch(err) {
            handleAxiosError(err)
          }
        }
        
        //Cargamos la lista de los nombres de los actores
        const loadCompany = async () => {
          
          try {
            const res = await axios.get(`http://localhost:3000/companies?movies_like=${props.id}`)

            company.value = res.data[0]?.name;
            companyCompleted = true;
            checkIsReady();
          } catch(err) {
            handleAxiosError(err)
          }
          
        }

        const checkIsReady = () => {
          ready.value = movieCompleted && companyCompleted && actorsCompleted;
        };

        const handleEdit = async () => {
          router.push(`/movies/edit/${props.id}`)
        };

        const handleDelete = async () => {
          ready.value = false;
          try {
            let res = await axios.delete(`http://localhost:3000/movies/${props.id}`)

            ready.value = true;
            if (res.status == 200) {
              router.push("/movies/");
            }
          } catch (err) {
            ready.value = true;
            handleAxiosError(`${err.name} - ${err.message}`);
          }
        }

        const handleAxiosError = (message) => {
          store.dispatch('setError', message)
        }

        // Carga inicial de los datos de la película
        onMounted(() => {
          store.commit('setShowMenuButton', false)
          loadMovie(props.id);
          loadCompany(props.id);
        });

        watch(movie, (value) => {
            store.commit('changeTitle', value.title)
            duration = value.duration;
            movieCompleted = true;
            checkIsReady(); 
            loadActors(value.actors);
        });

        return { t, movie, movieError, noImage, timeReadable, actorList, company, handleEdit, showWindow, handleDelete, ready }
    },
}
</script>