<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.userId }}</td>
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from 'axios'

export default({
   name: 'PostsExample',
   data() {
       return {
           posts: []
       }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then( posts => {
            this.posts = posts.data;
        })
    }
})
</script>
