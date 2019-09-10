<template>
  <div>
    <div class="topicDisplay" v-for="topic in topics">
      <div>
        <b-jumbotron
          :header="upperCase(topic.slug)"
          :lead="topic.description"
          @click="displayArticles(topic.slug)"
        >
          <p></p>
          <!-- <b-button variant="primary" href="#">More Info</b-button> -->
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script scoped>
import * as api from "./api";
import * as helper from "./helper";
export default {
  data() {
    return {
      topics: []
    };
  },
  methods: {
    upperCase(slug) {
      return helper.toUpperCase(slug);
    },
    displayArticles(slug) {
      this.$router.push(`/articles/${slug}`);
    }
  },
  created() {
    api.getTopics().then(topics => {
      this.topics = topics;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topicDisplay {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  opacity: 0.5;
}

.topicDisplay:hover {
  opacity: 1;
}
</style>
