<template>
    <div class="cart d-flex flex-column">
        <div class="cart-image">
            <img src="../../assets/logo.png" alt="">
        </div>
        <div class="cart-description">
            <h2> <router-link class="module-nav" :to="'/module/'+this.module.title">{{ this.module.title }}</router-link></h2>

            <div class="cart-resources d-flex flex-row gap-3 ">
                <span>{{ this.articleResources }} Articles</span>
                <span>{{ this.videoResources }} Videos</span>
                <span>{{ this.otherResources }} Others</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "module-cart",

    props: {
        "module": Object
    },

    data() {
        return {
            articleResources: 0,
            videoResources: 0,
            otherResources: 0
        }
    },

    mounted() {
        this.loadResources();
    },

    methods: {
        loadResources() {
            this.articleResources = this.module.resources.filter(function(object) {
               return object.resourceType === "article";
            }).length;

            this.videoResources = this.module.resources.filter(function(object) {
               return object.resourceType === "video";
            }).length;

            this.otherResources = this.module.resources.filter(function(object) {
               return object.resourceType === "other";
            }).length;
        }
    }
}
</script>
<style lang="scss">
@import "@colors";
.cart {
    height: 450px;
    width: 100%;
    border: 1.5px solid red;
    border-radius: 20px;

    .cart-image {
        width: 100%;
        height: 70%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .cart-description {
        color:red;
        width: 100%;
        height: 30%;
        padding: 10px;
        background-color: $timberwolf;
        border-radius: 0 0 20px 20px;

        .module-nav {
            text-decoration: none;
            color: $imperial-red;
        }
    }
}
</style>