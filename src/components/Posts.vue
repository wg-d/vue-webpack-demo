<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <th scope="row">{{ post.id }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default({
   name: 'PostsExample',
   data() {
       return {
           posts: [
               { id: 1, title: 'Post1', body: 'This is the cool post' },
               { id: 2, title: 'Post2', body: 'This is the cool post' },
               { id: 3, title: 'Post3', body: 'This is the cool post' },
               { id: 4, title: 'Post4', body: 'This is the cool post' },
               { id: 5, title: 'Post5', body: 'This is the cool post' },
               { id: 6, title: 'Post6', body: 'This is the cool post' },
           ]
       }
    }
})
</script>
