// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueCarousel from 'vue-carousel';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Blog from './components/Blog.vue';

Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(VueRouter);

const routes = [
  {
    path:'/', component: Posts,
  },
  {
    path:'/contact', component: Contact,
  },
  {
    path:'/dashboard', component: HelloWorld,
  },
  {
    path:'/login', component: Login,
  },
  {
    path:'/signup', component: Signup,
  },
  {
    path:'/blog', component: Blog,
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
