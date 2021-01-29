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
      this.bindplay()
    },
    methods: {
      bindplay() {
        this.video.addEventListener('play', () => {
          this.$emit('bindplay')
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