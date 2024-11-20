<template>
    <p class="text-center p-4 mb-2">404</p>
    <h2 class="text-center p-4 mt-4">Sorry, We Could Not Find This Page</h2>
    <UserSideBar></UserSideBar>
    <h3 class="text-center">Go <router-link to="/"> Home?</router-link></h3>
</template>
<script>
import UserSideBar from '../user/UserSideBar.vue';
export default {
    components: [UserSideBar]
}
</script>
<style lang="scss">
@import "@colors";

p {
    font-size: 110px;
    color: $imperial-red;
}

h2, h3 {
    color: $imperial-red
}
</style>