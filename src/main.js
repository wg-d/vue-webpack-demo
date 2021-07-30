// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  {
    path:'/', component: Posts,
  },
  {
    path:'/contact', component: Contact,
  }
]
/* eslint-disable no-new */
const router = new VueRouter({ routes: routes })


new Vue({
  el: '#app',
  router: router, 
  components: { App },
  template: '<App/>'
})
