<template>
  <div class="side-menu fixed h-[100vh] z-[100]">
    <va-sidebar v-for="item in items" :key="item.id" textColor="dark">
      <va-sidebar-item  class="pl-2">
        <va-sidebar-item-content>
          <va-sidebar-item-title><span class='text-xl'>{{ $t("menu") }}</span></va-sidebar-item-title>
          <va-icon name="close" @click="doClose"/>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item v-for="item in items" :key="item.id" class="pl-4 border-b-2" :active="item.id === selected">
       <router-link :to='item.to' @click="doSelect(item.id, item.name)"> 
          <va-sidebar-item-content>
            <va-sidebar-item-title> {{ $t(item.name) }} </va-sidebar-item-title>
            <va-icon name="chevron_right" />
          </va-sidebar-item-content>
       </router-link> 
      </va-sidebar-item>
    </va-sidebar>

  </div>
</template>
<script>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default {
    setup() {

        const { t } = useI18n();
        const store = useStore();
        const selected = computed(()=> store.state.menuSelected);
        const items = computed(()=> store.state.menuItems);

        const doClose = () => {
          store.commit('changeMenuVisibility', false)
        }

        const doSelect = (id, name) => {
          store.commit('setSelected', id)
          store.commit('changeTitle', name)
          doClose()
        }
        
        return { items, doClose, doSelect, selected, t }
    },
}
</script>
<style scoped>
  .side-menu .va-sidebar__item__content {
    padding: 15px;
    text-align: left;
  }
</style>
