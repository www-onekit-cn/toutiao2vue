<template>
  <button :class="['onekit-button1',onekitClass, 
                  {'onekit-button-mini': size === 'mini'},
                  {'onekit-button-primary': type === 'primary'}]"
          :id="onekitId"
          :style="{onekitStyle, 
                    'background-color': clicking ? _bgcolor.bgcolorActive : _bgcolor.bgcolor,
                    'color': clicking ? _bgcolor.bgTxtcolorActive : _bgcolor.bgTxtcolor,                   
                    }"
          @touchstart="_clicking"
          @touchmove="_clicking"
          @touchend="_touchend">
    <slot></slot>
  </button>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: 'onekit-button',
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {
        clicking: false
      }
    },
    props: {
      'size': {
        type: String,
        default: 'default'
      },
      'type': {
        type: String,
        default: 'default'
      }
    },
    computed: {
      _bgcolor() {
        let bgcolor = '#f1f2f6',
          bgcolorActive = '#cccccc',
          bgTxtcolor = 'rgba(0, 0, 0, .9)',
          bgTxtcolorActive = 'rgba(0, 0, 0, .5)'

        if (this.type === 'primary') {
          bgcolor = 'rgb(255, 145, 145)'
          bgcolorActive = 'rgb(226, 109, 109)'
          bgTxtcolor = '#ffffff'
          bgTxtcolorActive = 'rgba(255, 255, 255, .8)'
        }

        return { bgcolor, bgcolorActive, bgTxtcolor, bgTxtcolorActive }
      },
    },
    methods: {
      _clicking() {
        this.clicking = true
      },
      _touchend() {
        this.clicking = false
      }
    }
  }
</script>

<style>
  .onekit-button1 {
    border: 1px solid #ccc;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    outline: none;
    width: 100%;
  }

  .onekit-button-mini {
    width: auto;
    font-weight: 500;
    font-size: 13px;
    padding: 8px 16px;
    background: rgb(226, 109, 109);
  }
</style>