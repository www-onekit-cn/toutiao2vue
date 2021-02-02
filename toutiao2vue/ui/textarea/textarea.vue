<template>
  <textarea
            :class="['onekit-textarea',onekitClass]"
            :style="onekitStyle"
            :id="onekitId"
            v-model="text"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            :autofocus="focus"
            @input="write">
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