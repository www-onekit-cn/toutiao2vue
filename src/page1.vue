<template>
  <onekit-page id="app">
    <onekit-picker mdoe="selector"
                   :disabled="false"
                   @cancel="cancel"
                   :range="array">
      <onekit-view>当前选择： {}</onekit-view>
    </onekit-picker>
  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      array: ["美国", "中国", "巴西", "日本"],
    },
    onLoad() {

    },
    cancel() {
      console.log('[page1]: cancel')
    }
  })
</script>

<style>

</style>