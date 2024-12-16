<template>
    <div>
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
            <div class="what p-2">
                <h1>What is SecurePath?</h1>
                <p class="m-3">SecurePath is a web pentesting learning platform. It aims to teach through articles, videos, resources, and exercise, the art of testing websites against common penetration attacks</p>
            </div>
            <div class="who p-2">
                <h1>Who should learn pentesting?</h1>
                <p class="m-3">
                    The people who will benefit the most from this platform:
                    <ul>
                        <li>Web developers</li>
                        <li>Cybersecurity Specialists</li>
                        <li>Business Owners</li>
                        <li>White-hat hackers</li>
                    </ul>
                </p>
            </div>
            <div class="why p-2">
                <h1>Why learn web pentesting?</h1>
                <p class="m-3">
                    Web pentesting is a major skill to learn to build any reputable and secure software. Every business owner, web developer, software engineer, must learn how to test their product against common attacks malicious hackers use such as XSS, SQL injection, etc. Learning pentesting will help the community by using a secure and reliable software and make sure that hacker will have hard time finding vulnerabilties in our software that might help them penetrate it.
                </p>
            </div>
            <div class="credits p-2">
                <h1>Credits</h1>
                <p class="m-3">
                    The credits for this software goes to:
                    <ul>
                        <li><a href="https://www.linkedin.com/in/elias-khoury-lau" target="_blank">Elias Khoury</a></li>
                        <li><a href="https://www.lau.edu.lb" target="_blank">Lebanese American University</a></li>
                    </ul>
                </p>
            </div>
            <div class="color-code p-2">
                <h1>Secret behind our Black & Red profile</h1>
                <p class="m-3">
                    Black represents the darkness of the web: attacks, hacking, breaching, stealing information, etc. <br>
                    Red represents the passion and dedication of our team to secure the Web<br>
                    White represents the white-hat who are dedicated to fortify websites and making them stronger then ever
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "@colors";

.middle-content {
    h1 {
        color: $cornell-red;
    }

    p {
        font-size: 22px;
        color: $white-smoke;
    }

    ul {
        li {
            font-size: 22px;
        }
    }
}
</style>