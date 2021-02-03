import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from 'vue-svg-icon/Icon.vue'
import router from './router/index.js'
import LayoutDefault from '@/layout/default.vue'
import LayoutTab from '@/layout/tab.vue'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.component('layout-default', LayoutDefault)
Vue.component('layout-tab', LayoutTab)

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
