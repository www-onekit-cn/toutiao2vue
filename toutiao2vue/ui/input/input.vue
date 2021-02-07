<template>
  <div>
    <input
           :class="['onekit-input',onekitClass]"
           :style="onekitStyle"
           :id="onekitId"
           :value="value"
           :pattern="newType"
           :type="password ? 'password' : '' "
           :placeholder="placeholder"
           :disabled="disabled ? 'disabled' : false "
           :maxlength="maxlength"
           :autofocus="focusNew? 'autofocus' : '' "
           @focus="_focus"
           @blur="_blur"
           @keydown="_confirm" />
  </div>

</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-input",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {
        focusNew: 'false'
      }
    },
    props: {
      'value': String,
      'type': String,
      'password': Boolean,
      'placeholder': String,
      'placeholder-style': String,
      'disabled': Boolean,
      'maxlength': {
        type: Number,
        default: 140
      },
      'focus': Boolean,
      'cursor-spacing': Number,
    },
    computed: {
      newType() {
        let newType
        switch (this.type) {
        case 'text':
          newType = 'text'
          break
        case 'number':
          newType = '[0-9]*'
          break
        case 'digit':
          newType = 'number'
          break
        default:
        }
        return newType
      }
    },
    created() {},
    watch: {
      focus: {
        deep: true,
        handler(v) {
          if (v) this.focusNew = 'autofocus'
        },
        immediate: true
      }
    },
    methods: {
      _focus() {
        this.$emit('Focus')
      },
      _blur() {
        this.$emit('Blur')
      },
      _confirm(e) {
        if (e.key === 'Enter') {
          this.$emit('Confirm')
        }
      }
    }
  }
</script>

<style>
  .onekit-input {
    width: 100%;
    background: none;
    outline: none;
    border: none;
  }
</style>