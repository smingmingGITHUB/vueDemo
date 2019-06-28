import Vue from 'vue'
import Router from 'vue-router'

import Test from './components/Test.vue'
import TakePhoto from './components/takePhoto.vue'
import View from './components/view.vue'
import Horizontal from './components/Horizontal.vue'
import Rolling from './components/vue-concise-slider.vue'
import echartsOne from './components/echarts/echartsOne.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'echartsOne',
      component: echartsOne
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/takePhoto',
      name: 'takePhoto',
      component: TakePhoto
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/horizontal',
      name: 'horizontal',
      component: Horizontal
    },
    {
      path: '/rolling',
      name: 'rolling',
      component: Rolling
    }
  ]
})
