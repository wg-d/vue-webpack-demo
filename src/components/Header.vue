<template>
    <nav class="navbar navbar-expand-lg text-white bg-primary d-flex justify-content-between px-4">
        <router-link class="nav-link text-white" :to='"/"'><a class="navbar-brand text-white">Blog Site</a></router-link>
        <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link text-white" :to='"/"'>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" :to='"/blog"'>Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" :to='"/contact"'>Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" :to='"/contact"'>My Account</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" :to='"/login"'>Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    setup() {
        
    },
    name: 'Header'

}
</script>