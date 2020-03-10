import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const Markdown = require('vue-markdown')
  Vue.use(VueMarkdown);
}
