# vue-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run boy
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#路由
npm install vue-router
#vue内部图标库包含字体图标
npm insstall vue-awesome // 智能通过特定方式设置图标样式，不能尺寸与旋转共存，若共存则需要计算
// 给图标设置样式（大小可以通过 transform: scale() 来设置）或 用 .fa-icon {width: *; height: *}
// <
在main.js中
import 'vue-awesome/icons' // 导入所有图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js' 
// 全局使用
Vue.component('v-icon',Icon)

用法： <v-icon name="**></v-icon>
// >

#如果考虑项目大小，只导入用于减少包大小的图标
npm install font-awesome // 官网地址：https://fontawesome.com/icons?d=gallery&m=free
// <
   import 'font-awesome/css/font-awesome.css' 
// 用法： <i class="fa fa-xx"></i> */}
// >


cnpm i style-resources-loader -D 
包含以下两个依赖 使用时可选其一

npm install less less-loader --save
npm install css-loader --save
上两个为依赖的插件
#轮播图
npm install vue-awesome-swiper --save
#########具体实现看test案例


#图块滑动
# npm install vue-concise-slider --save
# demo地址
# https://warpcgd.github.io/vue-concise-slider/index.html" rel="nofollow noreferrer" target="_blank">https://warpcgd.github.io/vue