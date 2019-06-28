import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css' 
import 'vue-awesome/icons/flag' // 导入指定图标
// 给图标设置样式（大小可以通过 transform: scale() 来设置）
import 'vue-awesome/icons' // 导入所有图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js' 

// 全局使用
Vue.component('v-icon',Icon)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
