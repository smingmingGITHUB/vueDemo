<template>
  <div class="wrapper" ref="photo" width= "400" height= "400">
    <h1><router-link to="/">你好吗</router-link></h1>
    <video
      ref="video"
      :width="width"
      :height="height"
      autoplay
      style="width= 100%; height=100%; object-fit: fill"
    ></video>
    <canvas ref="canvas" width="300" height="400" v-show="taked"></canvas>
  </div>
</template>
<script>

export default {
  name: 'TakePhoto',
  props: {
    width: {
      default: 300 // 不传默认300
    },
    height: {
      default: 400 // 不传默认400
    }
  },
  data() {
    return {
      video: null,
      track: undefined,
      taked: true,
      status: 1, // 开始查找设备
      statusMsg: '查找设备中...'
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    init(call) {
      this.taked = false
      this.video = this.$refs.video
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
      if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true },
          (stream) => {
            this.track = stream.getTracks()[0]  // 通过这个关闭摄像头
            try {
              this.video.src = window.URL.createObjectURL(stream) // chrome版本<=70
            } catch (e) {
              this.video.srcObject = stream // chrome版本>70
            }
            this.video.onloadedmetadata = () => {
              // console.log(e)
              this.video.play()
              call(true)
            }
          }, () => {
            // console.log(err)
            call(false)
          }
        )
      } else {
        call(false)
      }
    },
    takePhoto(call) {
       this.video = this.$refs.video
      let canvas = this.$refs.canvas
      let context2D = canvas.getContext('2d')
      context2D.fillStyle = '#ffffff'
      context2D.fillRect(0, 0, this.width, this.height)
      context2D.drawImage(this.video, 0, 0, this.width, this.height)
      let image_code = canvas.toDataURL('image/png')//要传给后台的base64
      this.taked = true
      call(true, image_code)
      if (null != this.track) {
        this.track.stop()//关闭摄像头
      }
    }
  },
  destroyed() {
    if (null != this.track) {
      this.track.stop()//关闭摄像头
    }
  }
}
</script>
<style scoped>
canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
}
.wrapper {
  position: relative;
}
</style>
