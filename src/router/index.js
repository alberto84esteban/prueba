import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // Not rendered until is not visited
    component: () => import('../components/SideMenu.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    // Not rendered until is not visited
    component: () => import('../views/movies/Movies.vue')
  },
  {
    path: '/movies/new',
    name: 'New movies',
    // Not rendered until is not visited
    component: () => import('../views/movies/FormMovie.vue'),
    props: true
  },
  {
    path: '/movies/edit/:id',
    name: 'New movies',
    // Not rendered until is not visited
    component: () => import('../views/movies/FormMovie.vue'),
    props: true
  },
  {
    path: '/movie/:id',
    name: 'Movie detail',
    // Not rendered until is not visited
    component: () => import('../views/movies/MovieDetail.vue'),
    props: true
  }

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;