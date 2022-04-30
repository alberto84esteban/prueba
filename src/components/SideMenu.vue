<template>
  <div style="height: 13rem; border: 2px solid var(--va-primary);">
    <va-sidebar textColor="dark">
      
      <va-sidebar-item v-for="item in items" :key="item.id">
        <va-sidebar-item-content>
          <va-icon name="dashboard" />
          <!-- User can hide item with css if he wants -->
          <va-sidebar-item-title> Dashboard </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item active>
        <va-sidebar-item-content>
          <va-icon name="room" />
          <va-sidebar-item-title> Sidebar demo </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>
  </div>
</template>
<script>

import {ref} from 'vue'

export default {
    // :active="item.active"
    setup() {

        const enabled = true;

/*
        const items = [
            { title: 'Dashboard', icon: 'dashboard', id: 1},
            { title: 'Sidebar demo', icon: 'room', active: true, id:2 },
            { title: 'Loop', icon: 'loop', id:3 },
        ]; */
         const items = ref([
            {
                id:1,
                name:'Películas',
                to: '/peliculas'
            },
            {
                id:2,
                name:'Actores',
                to: '/actors'
            },
            {
                id:3,
                name:'Compañías',
                to: '/comapies'
            }
        ])
        return { items, enabled }
    },
}
</script>
<style scoped>

</style>
