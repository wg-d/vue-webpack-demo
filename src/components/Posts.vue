<template>
    <carousel>
    <slide class="carousel__item">
        <h1>Slider1</h1>
        <img src="../assets/carousel-img-1.png" />
        <i>I do love coding.</i>
    </slide>
    <slide class="carousel__item">
        <h1>Slider2</h1>
        <img src="../assets/carousel-img-2.jpg" />
        <i>I do love coding.</i>
    </slide>
    <slide class="carousel__item">
        <h1>Slider3</h1>
        <img src="../assets/carousel-img-3.png" />
        <i>I do love coding.</i>
    </slide>
    <slide class="carousel__item">
        <h1>Slider4</h1>
        <img src="../assets/carousel-img-4.jpg" />
        <i>I do love coding.</i>
    </slide>
    <slide class="carousel__item">
        <h1>Slider5</h1>
        <img src="../assets/carousel-img-5.jpg" />
        <i>I do love coding.</i>
    </slide>
    </carousel>
</template>

<script>

    import axios from 'axios'
    import { Carousel, Slide } from 'vue-carousel'

    export default({
    name: 'PostsExample',
    data() {
        return {
            posts: [],
        }
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then( posts => {
                this.posts = posts.data;
            })
        },
        components:{
        Carousel,
        Slide
    }
    })
</script>
<style scoped>
    .carousel__item {
        width: 200px;
        padding:20px;
        margin: 20px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .carousel__item>img{
        width: 100%;
    }
    .carousel__item>i{
        vertical-align: bottom;
    }
</style>