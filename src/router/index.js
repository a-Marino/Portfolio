import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/proyectos',
    component: () => import('../views/Proyectos.vue')
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return { x: 0, y: 0 }
    } else {
      return { x: 0, y: 0 }
     }
  }
})


export default router
