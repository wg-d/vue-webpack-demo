<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg text-white bg-primary d-flex justify-content-between px-4">
    <a class="navbar-brand text-white" href="#">Blog Site</a>
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link text-white" :to='"/"'>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to='"/contact"'>Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to='"/contact"'>Post</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to='"/contact"'>My Account</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to='"/contact"'>Login</router-link>
        </li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    Contact,
    Footer
  }
}
</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
