<template>
    <div class="not-allowed">
        <h1>You are not allowed to visit this page</h1>

        <div id="oops-image">
            <img src="../../assets/oops.png" alt="">
        </div>

        <div id="oops-text">
            <h3>You cannot visit this page due to an unverified account, kindly check your inbox and click on the link sent to your email</h3>
        </div>
        <button><router-link id="route-main" :to="'/modules/all'">Go Back To Main Page</router-link></button>
    </div>
</template>
<style>
.not-allowed {
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center
}

.not-allowed h3 {
    width: 70%;
    margin: 10px;
}

#oops-text {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 10px;
}

#oops-image {
    height: 50%;
    width: 70%;
}

#oops-image img {
    width: 100%;
    height: 100%;
}

#route-main {
    color: black;
    text-decoration: none;
    padding: 10px;
}
</style>