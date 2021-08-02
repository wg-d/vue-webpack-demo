<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Blog Site</a>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to='"/"'>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to='"/contact"'>Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to='"/contact"'>Post</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to='"/contact"'>My Account</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to='"/contact"'>Login</router-link>
        </li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    Contact
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
