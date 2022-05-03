<template>
  <div class="m-[50px] h-[70vh]">
    <va-alert :color="type" :title="title" :outline="outline" center class="mb-4 top-[30vh]">
      {{message}}
    </va-alert>
  </div>
  <div>
    <div v-if="backHome" class="text-center">
      <va-button size='large' icon-right='home' :color='type' class="text-center" outline @click='handleGoHome'>Home</va-button>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {

    props:['type', 'title', 'message', 'outline', 'origin', 'backHome', 'bordered'], // type válidos success, info, danger, warning
    components : {},
    setup() {
      const router = useRouter();
      const store = useStore();

      const handleGoHome = () => {
        
        //Eliminamos rastro de mensajes de error
        store.dispatch('cleanMessages');

        //Volvemos a '/'
        router.push("/")
      }
      return { handleGoHome }
    },
}
</script>