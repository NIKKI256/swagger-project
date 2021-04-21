import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import router from './router/route'
import store from './store/index'

import ApiUsers from './plugins/users'
import ApiPosts from './plugins/posts'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(ApiUsers)
Vue.use(ApiPosts)

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app')
