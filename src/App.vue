<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/movies">Movies</router-link>
  </div>
  <router-view />
</template>

<script>
// import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  // components: {SideMenu}, 
  setup() {
    
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
