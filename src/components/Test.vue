<template>
  <div class="swiperBox">
    <v-icon  class="icon" name="flag"></v-icon>
    <i class="fa fa-xx"></i>
     <v-icon  class="icon" name="beer"></v-icon>
     <v-icon  class="icon" name="fire"></v-icon>
      <v-icon  class="icon" name="flask"></v-icon>
      <v-icon  class="icon" name="camera-retro"></v-icon>
       <v-icon  class="icon" name="shower"></v-icon>
       <v-icon  class="icon" name="angle-double-left"></v-icon>
        <v-icon  class="icon" name="chess-board"></v-icon>
        使用方法：<i class="fa fa-home fa-lg"></i>
        <i class="fa fa-camera-retro fa-lg"></i>
        <i class="fa fa-microphone"></i>
        <i class="fa fa-hotel"></i>
        <i class="fa fa-phone"></i>
        <i class="fa fa-shower"></i>
    <swiper :options="swiperOption" ref="mySwiper" v-if="commodity.length !== 0" style="width: 50%">
      <swiper-slide v-for="(item, index) in commodity" :key="index">
        <img :src="item" style="width: 300px; height: 300px">
              <div class="swiper-button-next"></div> 
      <!-- //下一页 -->
      <div class="swiper-button-prev"></div> 
      <!-- //上一页 -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <h1><router-link to="/takePhoto">{{name}}</router-link></h1>
    <router-link to="/view" style="margin-right: 2rem;">toPhoto</router-link>
    <router-link to="/horizontal">navmenu-horizontal</router-link>
    <router-link to="/rolling">滚动</router-link>
  </div>
</template>

<script>
import Img01 from './../../public/01.jpg'
import Img02 from './../../public/02.jpg'
import Img03 from './../../public/03.jpg'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Test',
  components: { swiper, swiperSlide },
  props: {
    msg: String
  },
  data() {
    return {
      name: 'swiper<轮播图>',
      commodity: [Img01, Img02, Img03],
      swiperOption: {
        notNextTick: true, // 组件是否通过是sweiper来实例化
        pagination: {
          el: '.swiper-pagination'
        },
        speed: 800, //滑动速度
        direction: 'horizontal', // 滑动方向水平 默认：vertical（纵向切换）
        grabCursor: true,
        loop: true, // 循环
        disableOnInteraction: true,
        autoplay: { // 自动播放
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
                // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        slidesPerView: 'auto',
        centeredSLides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  created() {
    this.swiperOption.autoplay = this.commodity.length != 1 ? { //控制只有一张图片的时候不自动轮播
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    } : false
  },
  computed: {
    // 定义sweiper对象
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  mounted() {
    // 自定义控制跳转页
    // let that = this
    // this.swiper.slideTo(0, 0, false)
    // setInterval(function () {
    //   that.swiper.slideNext()
    // }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  /* 旋转30度 */
/* transform: matrix(0.866,0.5,-0.5,0.866,0,0);  */
/* 旋转30度并扩大2倍 */
	/* transform: matrix(1.732,0.5,-0.5,1.732,0,0); */
transform: matrix(1.732,0.5,-0.5,1.732,0,0);
  margin-bottom: 1rem;
  /* transform: scale(2,2) !important; 尺寸 */
  transform: rotate(270deg) !important; 
   /* 旋转角度 */
  margin-right: 1rem;
  color: green;
}
.fa-icon {
  height: 2rem;
  width: 2rem;
    color: green;
}
</style>
