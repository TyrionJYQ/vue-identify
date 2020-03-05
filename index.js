import Vue from 'vue'
import App from './demo/App'
import vueIdentify from './src'
Vue.use(vueIdentify)

new Vue({
  el: '#app',
  render: h => h(App)
})