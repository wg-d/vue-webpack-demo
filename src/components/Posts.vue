<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
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
               { id: 1, title: 'Post1', body: 'This is the first cool post' },
               { id: 2, title: 'Post2', body: 'This is the second cool post' },
               { id: 3, title: 'Post3', body: 'This is the third cool post' },
               { id: 4, title: 'Post4', body: 'This is the fourth cool post' },
               { id: 5, title: 'Post5', body: 'This is the fifth cool post' },
               { id: 6, title: 'Post6', body: 'This is the sixth cool post' },
           ]
       }
    }
})
</script>
