<template>
  <div :class="['onekit-image',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <div>{{src}}</div>
    <div class="img"
         :style="{
						backgroundImage: `url(${src})`,
						width: '300px', 
						height: '223px',
						backgroundPosition: 'center',
						backgroundSize: `${position}`}">
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
      position() {
        let position = ''
        if (this.mode == 'widthFix') {
          position = 'cover'
        }
        return position
      }
    }
  }
</script>

<style>
  .onekit-image img {
    width: 300px;
    height: 225px;
  }
</style>