<template>
    <div>
        <div style="text-align:center">
        <h2>Welcome to my blog!</h2>
        <p>Take a loot at around, it's new everyday!</p>
        </div>

        <!-- The App Section -->
        <div class="container">
        <div class="row">
            <div class="column-66">
                <h1 class="xlarge-font"><b>Coding!</b></h1>
                <h1 class="large-font" style="color:MediumSeaGreen;"><b>Why do it?</b></h1>
                <p><span style="font-size:36px">It means life of computer-generation.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button class="button">Read More</button>
            </div>
            <div class="column-33">
                <img src="../assets/carousel-img-1.png" width="335" height="471"/>
            </div>
        </div>
        </div>

        <!-- Clarity Section -->
        <div class="container" style="background-color:#f1f1f1">
        <div class="row">
            <div class="column-33">
                <img src="../assets/carousel-img-2.jpg" width="335" height="471"/>
            </div>
            <div class="column-66">
                <h1 class="xlarge-font"><b>Reading books</b></h1>
                <h1 class="large-font" style="color:red;"><b>Books to read?</b></h1>
                <p><span style="font-size:24px">Find books most relevant to you, your life and occupation!</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button class="button" style="background-color:red">Read More</button>
            </div>
        </div>
        </div>

        <!-- The App Section -->
        <div class="container">
        <div class="row">
            <div class="column-66">
                <h1 class="xlarge-font"><b>Build Career!</b></h1>
                <h1 class="large-font" style="color:MediumSeaGreen;"><b>Practice constantly!</b></h1>
                <p><span style="font-size:36px">Enjoy looking improved code.</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button class="button">Read More</button>
            </div>
            <div class="column-33">
                <img src="../assets/carousel-img-3.png" width="335" height="471"/>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
    * {
    box-sizing:border-box;
    }

    body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    }

    .container {
    padding: 64px;
    }

    .row:after {
    content: "";
    display: table;
    clear: both
    }

    .column-66 {
    float: left;
    width: 66.66666%;
    padding: 20px;
    }

    .column-33 {
    float: left;
    width: 33.33333%;
    padding: 20px;
    }

    .large-font {
    font-size: 48px;
    }

    .xlarge-font {
    font-size: 64px
    }

    .button {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    background-color: #04AA6D;
    }

    img {
    display: block;
    height: auto;
    max-width: 100%;
    }

    @media screen and (max-width: 1000px) {
    .column-66,
    .column-33 {
        width: 100%;
        text-align: center;
    }
    img {
        margin: auto;
    }
    }
</style>