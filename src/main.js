import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body) // 300毫秒延迟问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
