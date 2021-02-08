<template>
  <form
        :class="['onekit-form',onekitClass]"
        :style="onekitStyle"
        :id="onekitId">
    <slot></slot>
  </form>
</template>

<script>
  import toutiao_behavior from "../../behaviors/toutiao_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import { eventBus } from '../../eventBus'
  export default {
    name: "onekit-form",
    mixins: [toutiao_behavior, onekit_behavior],
    data() {
      return {
        formData: {},
      }
    },
    props: {


    },
    methods: {

    },
    mounted() {
      eventBus.$on('onekit-input-submit', data => {
        this.formData['input'] = data
        console.log(this.formData)
      })
      eventBus.$on('onekit-switch-submit', data => {
        this.formData['switch'] = data
        console.log(this.formData)
      })
      eventBus.$on('onekit-checkbox-submit', data => {
        this.formData['checkbox'] = data
        console.log(this.formData)
      })
    }
  }
</script>

<style>
</style>