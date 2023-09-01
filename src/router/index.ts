import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import bestNight from '../views/bestNight.vue'
import thingsMakeMeHappy from '../views/thingsMekeMeHappy.vue'
import thingsILoveInYou from '../views/thingsILoveInYou.vue'
import thingsILikeToDo from '../views/thingsILikeToDo.vue'
import expectationsFromYou from '../views/expectationsFromYou.vue'
import curious from '../views/curious.vue'
const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/bestNight',
    component: bestNight,
  },
  {
    path: '/thingsMakeMeHappy',
    component : thingsMakeMeHappy,
  },
  {
    path: '/thingsILoveInYou',
    component: thingsILoveInYou,
  },
  {
    path: '/thingsILikeToDo',
    component: thingsILikeToDo,
  },
  {
    path: '/expectationsFromYou',
    component: expectationsFromYou
  },
  {
    path: '/curious',
    component: curious
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
