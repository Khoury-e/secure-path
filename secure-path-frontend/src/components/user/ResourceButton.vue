<template>
  <div>
    <button v-if="this.type === 'article'" @click="goToResource(this.link)">Visit Article</button>

    <button v-else-if="this.type === 'video'" @click="goToResource(this.link)">Visit Video</button>

    <button v-else @click="goToResource(this.link)">Visit Resource</button>
  </div>
</template>
<script>
export default {
  name: "resource-button",

  props: {
    link: String,
    type: String,
  },

  methods: {
    goToResource(resource) {
      window.open(resource, "_blank");
    },
  },
};
</script>
<style lang="scss">
@import "@colors";

button {
  background-color: $imperial-red;
  border: none;
  border-radius: 7px;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 18px;
}

</style>
