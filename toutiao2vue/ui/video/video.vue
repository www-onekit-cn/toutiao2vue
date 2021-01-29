<template>
  <div
       :class="['onekit-video',onekitClass]"
       :style="onekitStyle">
    <video :src='src'
           :id="onekitId"
           controls
           :poster="poster"
           ref="vedioDom"></video>
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-video",
    mixins: [toutiao_behavior, onekit_behavior],
    data: () => ({ video: '' }),
    props: {
      src: {
        type: String,
        required: true,
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      poster: {
        type: String
      }

    },
    mounted() {
      const videoContext = this.$refs.vedioDom
      this.video = videoContext
      this._bindplay()
      this._bindpause()
      this._bindended()
      this._binderror()
    },
    methods: {
      _bindplay() {
        this.video.addEventListener('play', () => {
          this.$emit('bindplay')
        })
      },
      _bindpause() {
        this.video.addEventListener('pause', () => {
          this.$emit('bindpause')
        })
      },
      _bindended() {
        this.video.addEventListener('ended', () => {
          this.$emit('bindended')
        })
      },
      _binderror() {
        this.video.addEventListener('error', () => {
          this.$emit('binderror')
        })
      },
      _bindtimeupdate() {
        this.video.addEventListener('timeupdate', () => {
          this.$emit('bindtimeupdate')
        })
      }
    }
  }
</script>

<style>
  .onekit-video {
    width: 100%;
  }

  .onekit-video video {
    width: 100%;
  }
</style>