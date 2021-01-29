<!--
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-29 12:19:11
 * @Version: 1.0
 * @FilePath: \toutiao2vue\toutiao2vue\ui\image\image.vue
-->
<template>
  <div :class="['onekit-image',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="img"
         :style="{
						backgroundImage: `url(${src})`,
						width: width ? width : '300px', 
						height: height ? height : '223px',
						backgroundPosition: position ? position : '',
						backgroundSize: bgcover,
            backgroundRepeat: 'no-repeat',           
            }">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-image",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      'src': {
        type: String,
      },
      'mode': {
        type: String,
        default: 'scaleToFill'
      },
      'lazy-load': {
        type: Boolean,
        default: false
      }
    },
    methods: {

    },
    computed: {
      bgcover() {
        let bgcover = ''
        switch (this.mode) {
        case 'aspectFit':
          bgcover = 'cover'
          break
        case 'aspectFill':
          bgcover = 'contain'
          break
        default:
        }
        return bgcover
      },
      width() {
        let bgwidth
        switch (this.mode) {
        case 'scaleToFill':
          bgwidth = '100%'
          break
        default:
        }
        return bgwidth
      },
      height() {
        let bgheight
        switch (this.mode) {
        case 'widthFix':
          bgheight = '100%'
          break;

        default:
          break
        }
        return bgheight
      },
      position() {
        let bgposition
        switch (this.mode) {
        case 'top':
          bgposition = 'top'
          break
        case 'bottom':
          bgposition = 'bottom'
          break
        case 'center':
          bgposition = 'center'
          break
        case 'left':
          bgposition = 'left'
          break
        case 'right':
          bgposition = 'right'
          break
        case 'top left':
          bgposition = 'top left'
          break
        case 'top right':
          bgposition = 'top right'
          break
        case 'bottom left':
          bgposition = 'bottom left'
          break
        case 'bottom right':
          bgposition = 'bottom right'
          break
        default:
          break;
        }
        return bgposition
      }
    }
  }
</script>

<style>
  .onekit-image {
    width: 100%;
  }

  .onekit-image img {
    width: 300px;
    height: 225px;
  }
</style>