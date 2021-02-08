<template>
  <button :class="['onekit-button1',onekitClass, 
                  {'onekit-button-mini': size === 'mini'},]"
          :id="onekitId"
          :style="{onekitStyle, 
                   'background-color': clicking ? _bgcolor.bgcolorActive : _bgcolor.bgcolor,
                   'color': clicking ? _bgcolor.bgTxtcolorActive : _bgcolor.bgTxtcolor,                   
                    }"
          :type="formType"
          @touchstart="_clicking"
          @touchmove="_clicking"
          @touchend="_touchend">
    <div class="loading"
         v-if="_loading">
    </div>
    <slot></slot>
  </button>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
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
      },
      'disabled': Boolean,
      'loading': Boolean,
      'form-type': {
        type: String
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

        if (this.disabled) {
          bgTxtcolor = 'rgba(0, 0, 0, .3)'
        }

        return { bgcolor, bgcolorActive, bgTxtcolor, bgTxtcolorActive }
      },
      _loading() {
        let loading = false
        if (this.loading) {
          loading = true
        }
        return loading
      }
    },
    methods: {
      _clicking() {
        if (this.disabled) return
        this.clicking = true
      },
      _touchend() {
        if (this.disabled) return
        this.clicking = false
      }
    },
    mounted() {
      if (this.formType === 'submit') {
        eventBus.$on('onekit-form-submit',
          data => {
            console.log(data)
          })
      }
    }
  }
</script>

<style>
  .onekit-button1 {
    border: 1px solid #ccc;
    padding: 14px 16px;
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
  }

  .loading {
    width: 20px;
    height: 20px;
    display: inline-block;
    /* background: #000; */
    border: 2px solid #ffffff;
    border-bottom: .3px solid transparent;
    border-radius: 100%;
    margin-right: 8px;
    animation: loadingRotato 1.4s linear infinite;
  }

  @keyframes loadingRotato {
    from {
      transform: translateY(4px) rotate(0deg);
    }

    to {
      transform: translateY(4px) rotate(360deg);
    }
  }
</style>