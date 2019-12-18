import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
// import VeeValidate from 'vee-validate'
import App from './App.vue'
import { router } from "./router";

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(VeeValidate)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
