<template>
  <onekit-page id='app'>
    <onekit-input value="h"
                  type="dight"
                  :password="false"
                  :focus="focus"
                  @Confirm="confirm" />
  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  export default OnekitPage({}, {
    data: {
      focus: false
    },
    onLoad() {
      setTimeout(() => {
        this.focus = true
      }, 3000)
    },
    confirm() {
      console.log('ok')
    }
  })
</script>

<style>

</style>