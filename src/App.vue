<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item router-link to="/">Topics</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item router-link to="/articles">Articles</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search Article..."
                v-model="search"
                @click="toArticles()"
              ></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view :search="this.search" />
  </div>
</template>

<script>
import { METHODS } from "http";
export default {
  data() {
    return {
      search: ""
    };
  },
  name: "app",
  methods: {
    toArticles() {
      this.$router.push(`/articles`);
    }
  }
};
</script>

<style>
.nav-link {
  font-size: 30px;
}

li {
  margin-left: 35%;
}
</style>
