<template>
    <h1> {{ $t("hello") }}</h1>
    <div class="row">
        <va-card v-for="item in items" :key="item.id" class="p-[10px] movie-card-item max-w-full cursor-pointer" :to='item.to'>
            <va-card-title class="p-1 ml-3 text-xl">{{item.name}}</va-card-title>
      <!--
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
      /> -->
      <va-card-content class="w-[90%] pt-2 overflow-x-auto whitespace-nowrap">
        <span class='mr-3' v-for="text in genre" :key="text">#{{item.name}}</span>
      </va-card-content>
        </va-card>
<!--
        <va-card :bordered="true" :outlined="true" class="p-[10px] movie-card-item max-w-full cursor-pointer" @click="handleClick">
      
    </va-card>
    -->
    </div>
</template>
<script>

import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name:'HomeView',
    setup() {

        const store = useStore();
        const items = computed(()=> store.state.menuItems);

        const { t } = useI18n();

        return { t, items }
    }
}
</script>
<style>

</style>