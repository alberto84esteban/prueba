<template>
  <va-card :bordered="true" :outlined="true" class="p-[10px] movie-card-item max-w-full cursor-pointer" @click="handleClick">
      <va-card-title class="p-1 ml-3 text-xl">{{title}}</va-card-title>
      <va-image
        v-if="image"
        :src="image"
        style="height: 200px;"
        class="w-[90%] m-auto p-1"
      /> 
      <va-image
        v-else
        :src="noImage"
        style="height: 200px;"
        class="w-[90%] m-auto p-1"
      />
      <va-card-content class="w-[90%] pt-2 overflow-x-auto whitespace-nowrap">
        <span class='mr-3' v-for="text in genre" :key="text">#{{text}}</span>
      </va-card-content>
    </va-card>
</template>
<script>

import noImage from '../assets/noImage.png'
import { useRouter } from 'vue-router'



export default {
    // :active="item.active"
    props:[ 'id','title','image','genre'],
    setup(props) {
        const router = useRouter();

        const handleClick = () => {
          router.push(`/movie/${props.id}`)
        }
        return { noImage, handleClick }
    },
}
</script>
<style scoped>

</style>
