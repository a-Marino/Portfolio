import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "home" */ '../views/Index.vue')
  },
  {
    path: '/vacunate',
    beforeEnter() { location.href = 'https://vacunatepba.gba.gob.ar/' }
  },
  {
    path: '/vacunas',
    name: 'Vacunas',
    component: () => import('../views/Vacunas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
