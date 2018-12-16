import Vue from 'vue'
import VueRouter from 'vue-router'
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import App from './App.vue'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(VueRouter)
Vue.use(Materialize)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path:'/', component:Home},
    {path:'/login', component:Login}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
