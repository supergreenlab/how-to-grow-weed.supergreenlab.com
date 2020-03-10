import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const InfiniteLoading = require('vue-infinite-loading')
  Vue.component('infinite-loading', InfiniteLoading)
}
