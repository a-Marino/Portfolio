import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/github',
    beforeEnter() {window.open('https://github.com/a-Marino', '_blank')}
  },
  {
    path: '/instagram',
    beforeEnter() {window.open('https://www.instagram.com/andresmarino_/', '_blank')}
  },
  {
    path: '/linkedin',
    beforeEnter() {window.open('https://www.linkedin.com/in/andr%C3%A9s-marino-16ab14202/', '_blank')}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
