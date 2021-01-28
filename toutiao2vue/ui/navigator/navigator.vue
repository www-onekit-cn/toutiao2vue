<template>
  <div :class="['onekit-navigator',onekitClass]" :style="onekitStyle" :id="onekitId" @click="div_click">
    <slot></slot>
  </div>
</template>

<script>
  import tt from '../../tt'
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-navigator",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      'target': {
        type: String,
        default: 'self',
        validator(value) {
          return value == 'self' || 'miniProgram'
        }
      },
      'url': {
        type: String
      },
      'open-type': {
        type: String,
        default: 'navigate',
        validator(value) {
          return value == 'navigate' || 'redirect' || 'switchTab' || 'reLaunch' || 'navigateBack' || 'exit'
        }
      },
      'delta': {
        type: [Number, String],
        default: 1
      },
      'app-id': {
        type: String
      },
      'path': {
        type: String
      },
      'extra-data': {
        type: Object
      },
      'version': {
        type: String,
        default: 'release',
        validator(value) {
          return value == 'develop' || 'trial' || 'release'
        }
      },
      'hover-class': {
        type: String,
        default: 'navigator-hover'
      },
      'hover-stop-propagation': {
        type: Boolean,
        default: false
      },
      'hover-start-time': {
        type: Number,
        default: 50
      },
      'hover-stay-time': {
        type: Number,
        default: 600
      },
      'bindsuccess': {
        type: String
      },
      'bindfail': {
        type: String
      },
      'bindcomplete': {
        typr: String
      }
    },
    methods: {
      div_click() {
        const url = this.url
        const delta = this.delta
        switch (this.openType) {

          case 'navigate':
            tt.navigateTo({
              url
            })
            break;

          case 'redirect':
            tt.redirectTo({
              url
            })
            break;

          case 'switchTab':
            tt.switchTab({
              url
            })
            break;

          case 'reLaunch':
            tt.reLaunch({
              url
            })
            break;

          case 'navigateBack':
            tt.navigateBack({
              delta
            })
            break;

          case 'exit':
            window.location.href = "about:blank";
            break;

          default:
            console.log('跳转方式不合法，跳转失败' + this.openType)
        }
      }
    }
  }
</script>

<style>
</style>