<template>
  <textarea
            :class="['onekit-textarea',onekitClass]"
            :id="onekitId"
            v-model="text"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            :autofocus="focus"
            @input="write"
            @focus="_focus"
            :style="{onekitStyle,'position': fixed ? 'fixed' : 'relative'}">
  </textarea>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-textarea",
    data() {
      return {
        text: this.value
      }
    },
    mixins: [toutiao_behavior, onekit_behavior],
    props: {
      'value': String,
      'placeholder': String,
      'disabled': {
        type: Boolean,
        default: false
      },
      'maxlength': Number,
      focus: {
        type: Boolean,
        default: false,
      },
      'auto-height': {
        type: Boolean,
        default: false
      },
      'fixed': {
        type: Boolean,
        default: false
      },
      'cursor-spacing': {
        type: Number,
        default: -1
      },
      'cursor': {
        type: Number,
        default: -1
      }
    },
    created() {},
    mounted() {


    },
    methods: {
      write() {
        if (this.autoHeight) {
          console.log(this.$el.scrollHeight)
          this.$el.style.height = `${this.$el.scrollHeight}px`
        }
      },
      __setCaretPosition(ctrl, pos) {
        if (ctrl.setSelectionRange) {
          ctrl.focus();
          ctrl.setSelectionRange(0, pos)
        } else if (ctrl.createTextRange) {
          var range = ctrl.createTextRange()
          range.collapse(true)
          range.moveEnd('character', pos)
          range.moveStart('character', pos)
          range.select()
        }
      },
      _focus() {
        if (this.cursor !== -1) {
          this.__setCaretPosition(this.$el, this.cursor)
        }

        if (this.cursorSpacing !== -1) {
          setTimeout(() => {
            this.$el.scrollIntoView(true)
          }, 200)
        }
      }
    },
  }
</script>

<style>
  .onekit-textarea {
    width: 100%;
    resize: none;
    background: none;
    outline: none;
    /* border: none;a */
  }
</style>