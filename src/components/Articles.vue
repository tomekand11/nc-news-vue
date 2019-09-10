<template>
  <div>
    <!-- <div class="article" v-for="article in articles">
      <h5 class="card-header">Topic :{{article.topic}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{article.title}}</h5>
        <p class="card-text">{{article.body}}.</p>
      </div>
    </div>-->
    <div>
      <div class="article" v-for="article in filterArticles">
        <b-card-group deck>
          <b-card
            border-variant="secondary"
            :header="upperCase(article.title)"
            header-border-variant="secondary"
          >
            <b-card-text>{{article.body.slice(0,150) + " " + "..."}}</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "./api";
import * as helper from "./helper";
export default {
  props: ["search"],
  data() {
    return {
      articles: [],
      selectedTopic: this.$route.params.topic
    };
  },
  methods: {
    upperCase(title) {
      return helper.toUpperCase(title);
    },
    getArticlesByTopic() {
      api.getArticles(this.$route.params.topic).then(articles => {
        this.articles = articles;
      });
    }
  },
  computed: {
    filterArticles() {
      return this.articles.filter(article => {
        return article.title
          .toLowerCase()
          .includes(this.search.toLocaleLowerCase());
      });
    }
  },

  created() {
    this.getArticlesByTopic();
  },
  beforeUpdate() {},
  watch: {
    $route(to, from) {
      if (from.path === `/articles/${this.selectedTopic}`)
        this.getArticlesByTopic();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 3%;
  opacity: 0.7;
}

.article:hover {
  opacity: 1;
}
</style>
