/* eslint-disable */
<template>
  <div class="d-flex flex-row">
    <div>
      <user-side-bar></user-side-bar>
    </div>
    <div class="main-content p-3">
      <div class="module-title">
        <h2>{{ this.title }}</h2>
      </div>

      <div class="module-description p-2">
        <p v-html="this.description"></p>
      </div>

      <div class="module-resources" v-if="this.resources.length > 0">
        <div class="single-module-resource">
          <h2>Additional Resources For {{ this.title }} Module</h2>
          <div class="articles p-2" v-if="this.articleCount > 0">
            <div
              class="articles__title d-flex flex-row gap-3 align-items-center"
            >
              <h3>Articles</h3>
              <img
                src="../../assets/article-3-svgrepo-com.svg"
                alt="article_icon"
              />
            </div>
            <div
              class="single-articles"
              v-for="(article, index) in articles"
              :key="index"
            >
              <resource-button
                :type="'article'"
                :link="article"
              ></resource-button>
            </div>
          </div>
          <div class="videos p-2" v-if="this.videoCount > 0">
            <div class="videos__title d-flex flex-row gap-3 align-items-center">
              <h3>Videos</h3>
              <img src="../../assets/play-svgrepo-com.svg" alt="video_icon" />
            </div>
            <div
              class="single-videos"
              v-for="(video, index) in videos"
              :key="index"
            >
              <resource-button :type="'video'" :link="video"></resource-button>
            </div>
          </div>
          <div class="others p-2" v-if="this.othersCount > 0">
            <div class="others__title d-flex flex-row gap-3 align-items-center">
              <h3>Others</h3>
              <img src="../../assets/file-svgrepo-com.svg" alt="file_icon" />
            </div>
            <div
              class="single-others"
              v-for="(other, index) in otherContent"
              :key="index"
            >
              <resource-button :type="'other'" :link="other"></resource-button>
            </div>
          </div>
        </div>
      </div>

      <div class="module-exercises">
        <h2>Exercises</h2>
        <p>
          There are exercises available for this module, arranged from low to
          high difficulty.
        </p>

        <h5>Instructions:</h5>
        <div class="p-3">
          <ol class="p-2">
            <li>A test website will be provided to you by Securepath</li>
            <li>
              Do not use any personal information while pentesting a test
              website, if needed use stuff such as "TestPass" or "TestUsername"
            </li>
            <li>
              Each test website has a small note at the top stating what needs
              to be done to complete the module
            </li>
          </ol>
        </div>

        <div class="exercises-actions d-flex flex-row gap-3">
          <button @click="loadExercise(this.title, (this.difficulty = 'easy'))">
            {{ this.title }} - Easy
          </button>
          <button
            @click="loadExercise(this.title, (this.difficulty = 'medium'))"
          >
            {{ this.title }} - Medium
          </button>
          <button @click="loadExercise(this.title, (this.difficulty = 'hard'))">
            {{ this.title }} - Hard
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ResourceButton from "./ResourceButton.vue";
import UserSideBar from "./UserSideBar.vue";

export default {
  name: "single-module",

  data() {
    return {
      title: "",
      description: "",
      resources: [],
      exercises: [],
      articleCount: 0,
      videoCount: 0,
      othersCount: 0,
      articles: [],
      videos: [],
      otherContent: [],
      difficulties: ["easy", "medium", "hard"],
    };
  },

  components: {
    ResourceButton,
    UserSideBar,
  },

  created() {
    let title = this.$route.href.split("/")[2];

    axios
      .get(`http://localhost:3000/user/module/${title}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.title = response.data.module.title;
        this.description = response.data.module.description;
        this.resources = response.data.module.resources;
        this.resources.forEach((resource) => {
          if (resource["resourceType"] === "article") {
            this.articles.push(resource["resourceValue"]);
            this.articleCount++;
          } else if (resource["resourceType"] === "video") {
            this.videos.push(resource["resourceValue"]);
            this.videoCount++;
          } else if (resource["resourceType"] === "other") {
            this.otherContent.push(resource["resourceValue"]);
            this.othersCount++;
          }
        });
        this.exercises = response.data.module.exercises;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.$router.push("/not-found");
        }
      });
  },

  methods: {
    loadExercise(title, difficulty) {
      axios
        .get(
          `http://localhost:3000/user/load-exercise/${title}/${difficulty}`,
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            if (confirm("Visit test website")) {
              window.open(response.data.website);
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style lang="scss">
@import "@colors";
.main-content {
  margin-left: 200px;
  flex:1;
  h2 {
    color: $cornell-red-2;
  }

  img {
    width: 32px;
    height: 32px;
  }

  .module-description {
    p {
      font-size: 18px;
      color: $white-smoke;
    }
  }

  .module-exercises {
    p {
      font-size: 15px;
      color: $white-smoke;
    }
  }
}
</style>
