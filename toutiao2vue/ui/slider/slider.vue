<template>
  <div
       :class="['onekit-slider',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div class="slider-bar"
         :style="{'background-color': backgroundColor}">
      <div class="inner-bar"
           :style="{'width': left}"></div>
      <div class="dot"
           @touchmove="_touchmove"
           :style="{'left': left,'width': `${blockSize}px`,
                    'height':  `${blockSize}px`, 
                    'top':  `-${blockSize / 2}px`,
                    'background-color': blockColor}">
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-slider",
    mixins: [toutiao_behavior, onekit_behavior],
    data: () => ({ left: 0 }),
    props: {
      'background-color': {
        type: String,
        default: '#e9e9e9'
      },
      'block-size': {
        type: Number,
        default: 28
      },
      'block-color': {
        type: String,
        default: '#ffffff'
      }

    },
    methods: {
      _touchmove(e) {
        //onsole.log(window.screen.availWidth) // 屏幕宽度
        const { clientX } = e.changedTouches[0]
        if (clientX < 289 && clientX > 15) {
          // console.log(clientX / window.screen.availWidth)
          this.left = clientX - 20 + 'px'
        }
      }
    }
  }
</script>

<style>
  .onekit-slider .slider-bar {
    width: 100%;
    height: 1.5px;
    position: relative;
  }

  .slider-bar .dot {
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 2px 2px #ccc,
      0px 1px 4px #ccc;

  }

  .slider-bar .inner-bar {
    height: 100%;
    background: #27ae60;
    position: absolute;
    max-width: 100%;
  }
</style>