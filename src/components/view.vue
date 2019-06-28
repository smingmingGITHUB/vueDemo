<template>
  <div id="photo">
    <div class="right-wrapper">
      <TakePhoto class="photo" ref="photo"></TakePhoto>
      <div class="takePhoto-btn" @click="handleTakePhoto">{{statusMsg}}</div>
    </div>
  </div>
</template>
<script>
import { base64ToImageFile } from '../utils/utils'
import TakePhoto from './takePhoto'

export default {
  name: 'view',
  components: { TakePhoto },
  data() {
    return {
      status: 1,
      statusMsg: '拍照认证',
      certifyImg: null
    }
  },
  /* eslint-disable */
  methods: {
    handleTakePhoto() {
      if (this.status === 1) { // 初始化摄像头
        this.statusMsg = '查找设备中...'
        this.$refs.photo.init((res) => {
          if (res) {
            this.status = 2
            this.statusMsg = '拍照'
          } else {
            alert('未发现设备')
          }
        }) // 初始化摄像头
      } else if (this.status === 2) { // 拍照
        this.$refs.photo.takePhoto((res, img) => {
          if (res) {
            this.status = 3
            // console.log(img)
            this.certifyImg = base64ToImageFile(img)
            this.statusMsg = '重新拍'
          }
        })
      } else if (this.status === 3) { // 重新拍
        this.certifyImg = null
        this.$refs.photo.init((res) => {
          if (res) {
            this.status = 2
            this.statusMsg = '拍照'
          } else {
            alert('未发现设备')
          }
        }) // 初始化摄像头
      }
    },
  }
}
</script>
<style scoped>
.right-wrapper {
  min-width: 25rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.photo {
  margin-left: 2rem;
}
</style>
