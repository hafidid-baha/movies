import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Series from '../views/Series.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/series',
    name: 'Series',
    component:Series
  },
  {
    path: '/details/:id',
    name: 'Details',
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
