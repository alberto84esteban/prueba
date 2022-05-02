<template>
  <div class="w-full pt-[20px] p-2 row text-xl">

    <!-- Título -->
    <div class="flex flex-col xs12 sm6 md6 lg6 text-xl">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('title') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="title"
          :autosize="true"
          color="black"
        />
      </div>
    </div>

    <!-- Poster -->
    <div class="flex flex-col xs12 sm6 md6 lg6 text-xl px-2">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('poster') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="poster"
          :autosize="true"
          color="black"
        />
      </div>
    </div>

    <!-- Géneros -->
    <div class="flex flex-col xs12 sm6 md6 lg6 text-xl">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('genres') }}</span>
        <va-input
          class="mb-1"
          bordered
          v-model="new_genre"
          :autosize="true"
          color="black"
        />
        <span>{{ visual_genres }}</span>
      </div>
    </div>

    <!-- Actores -->
    <div class="flex flex-col xs12 sm6 md6 lg6 text-xl">
      <div class="flex flex-col">
        <span class="m-2">{{ $t('actors') }}</span>
        <va-select
          class="mb-2"
          bordered
          :options="actors"
          v-model="actorsSel"
          multiple
          color="black"
        />
        <va-chip v-for='(actor, index) in actorsSel' :key="index" closeable>
          closeable chip
        </va-chip>
      </div>
    </div>


  </div>
</template>
<script>

// import doRequest from '../utils/doRequest'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import doRequest from '../../utils/doRequest'

export default {
  name:'FormMovie',
  props: ['id'],
  components:{},
  setup(props) {

    const { t } = useI18n();
    const store = useStore();
    const title = ref("");
    const poster = ref("");
    const new_genre = ref("");
    const genres = ref([]);
    const actors = ref(['act1', 'act2', 'act3'])
    const actorsSel = ref([])

    const visual_genres = computed(() => {
      let text;
      genres.value.forEach(element => {
        text += `#${element} `;
      });

      return text;
    })

    let { data : movie, load : loadMovie } = doRequest(`movies/${props.id}`);
    // const {data, load, error} = doRequest()  

    // Carga inicial de los datos de la película
    onMounted(() => {
      store.commit('setShowMenuButton', false)
           // store.commit('changeTitle', value.title)
    });
    loadMovie();
    console.log('data!!! ', movie);
    // load();
    console.log('New Movie!', props.id)
    return { t, title, poster, new_genre, visual_genres, actors, actorsSel }
  }
}
</script>
<style>

</style>