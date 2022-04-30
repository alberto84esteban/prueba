<template>
  <va-card :bordered="true" :outlined="true" class="p-[10px] movie-card-item max-w-full">
      <va-card-title class="p-1 ml-3 text-xl">{{title}}</va-card-title>
      <va-image
        v-if="image"
        :src="image"
        style="height: 200px;"
        class="w-[90%] m-auto"
      /> 
      <va-image
        v-else
        :src="noImage"
        style="height: 200px;"
      />
      <va-card-content class="p-0 pt-2 overflow-x-auto">
        <span class='ml-4' v-for="text in genre" :key="text">#{{text}}</span>
      </va-card-content>
    </va-card>
</template>
<script>

import noImage from '@/assets/noImage.png'

export default {
    // :active="item.active"
    props:[ 'id','title','image','genre'],
    setup() {
        return { noImage }
    },
}
</script>
<style scoped>

</style>
