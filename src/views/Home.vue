<template>
  <div class="row w-full">
    <div v-for="item in items" :key="item.id" class="flex max-w-full xs12 sm6 md6 lg6">
    <va-card class="m-[30px] cursor-pointer" :to='item.to'>
      <va-card-title class="p-1 ml-3 text-xl">{{item.name}}</va-card-title>

      <va-image
        :src="item.image"
        style="height: 200px;"
        class="w-[90%] m-auto p-1"
      />
      <va-card-content class="w-[90%] pt-2 overflow-x-auto whitespace-nowrap">
        <span class='mr-3' v-for="text in genre" :key="text">#{{item.name}}</span>
      </va-card-content>
    </va-card>
  </div>
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