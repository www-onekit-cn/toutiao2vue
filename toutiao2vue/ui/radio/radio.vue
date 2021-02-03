<template>
  <div
       :class="['onekit-radio',onekitClass]"
       :style="onekitStyle">
    <input type="radio"
           :id="onekitId">
    <sapn class="radio-label"></sapn>
  </div>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-radio",
    mixins: [toutiao_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
  .onekit-radio {
    position: relative;
    line-height: 30px;
    display: inline-block;
  }

  input[type='radio'] {
    width: 20px;
    height: 20px;
    opacity: 0;
    border: none;
    outline: none;
    visibility: hidden;
  }


  .radio-label {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
  }

  input:checked+.radio-label {
    background-color: #f53b57;
    border: 1px solid #f53b57;
  }

  input:checked+.radio-label::after {
    position: absolute;
    content: '';
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
</style>