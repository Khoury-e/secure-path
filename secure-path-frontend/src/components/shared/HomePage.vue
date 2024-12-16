<template>
    <div class="home">
        <nav class="d-flex flex-row justify-content-end p-3 mb-4">
            <div id="login-route">
                <router-link class="routes p-3" to="/login">Login</router-link>
            </div>
            <div id="signup-route">
                <router-link class="routes p-3" to="/signup">Register</router-link>
            </div>
            <div id="more-about-route">
                <router-link class="routes p-3" to="/moreAbout">More About SecurePath&#169;</router-link>
            </div>
        </nav>
        <div class="middle-content mt-2 mb-2">
            <div class="learn d-flex flex-row p-2 mb-2">
                <div class="content-image w-50">
                    <img src="../../assets/HomeImage1.png" alt="">
                </div>
                <div class="content-text p-3 w-50 text-center">
                    <span>Learn about the basics of web penetration testing with articles, videos, explanation, and real-life exercises!</span>
                </div>
            </div>
            <div class="practice d-flex flex-row p-2 mt-4">
                <div class="content-text p-3 w-50 text-center">
                    <span>Experience the feeling of penetration testing custom-made vulnerable testing websites, tailored for your web penetration learning journey</span>
                </div>
                <div class="content-image w-50">
                    <img src="../../assets/HomeImage2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "@colors";
nav {
    background-color: $cornell-red;
    .routes {
        color: $timberwolf;
        font-size: x-large;
    }
}

.content-text {
    color: $imperial-red;
    font-size: 26px;
}

.content-image img {
    width: 100%;
    height: 100%;
    border: 2px solid $cornell-red;
}

</style>