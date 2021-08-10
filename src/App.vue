<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Blog from './components/Blog.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    Contact,
    Header,
    Footer,
    Login,
    Signup,
    Blog
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
