import Vue from 'vue'
import Router from 'vue-router'
import Topics from '../components/Topics.vue'
import Articles from '../components/Articles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Topics',
    component: Topics
  }, {
    path: '/articles',
    name: 'articles',
    component: Articles
  }, {
    path: '/articles/:topic',
    name: 'articlesByTopic',
    component: Articles
  }, {
    path: '/article/:id',
    name: 'articlesId',
    component: Articles
  }]
})