<template>
  <button :class="['onekit-button1',onekitClass]"
          :id="onekitId"
          :style="{onekitStyle, 'background-color': click ? '#f1f2f6' : '#ffffff'}"
          @touchstart="_click()"
          @touchmove="_click()"
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
        click: false
      }
    },
    methods: {
      _click() {
        this.click = true
      },
      _touchend() {
        this.click = false
      }
    }
  }
</script>

<style>
  .onekit-button1 {
    width: 100%;
    border: 1px solid #ccc;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    outline: none;
  }
</style>