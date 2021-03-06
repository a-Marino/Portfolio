import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import 'animate.css'

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
