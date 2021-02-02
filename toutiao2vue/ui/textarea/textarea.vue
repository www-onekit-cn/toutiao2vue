<template>
  <textarea
            :class="['onekit-textarea',onekitClass]"
            :style="onekitStyle"
            :id="onekitId"
            v-model="text">
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
      'value': String
    },
    created() {
      // this.text = this.value
      // console.log(this.text)
    },
    methods: {
      write(event) {
        console.log('ok', event)
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
    border: none;
  }
</style>