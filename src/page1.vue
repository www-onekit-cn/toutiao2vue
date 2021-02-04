<template>
  <onekit-page id="app">
    <onekit-picker mode="selector"
                   :range="array"
                   @cancel="cancel">
      <onekit-view>当前选择： {}</onekit-view>
    </onekit-picker>
  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      array: [],
    },
    onLoad() {
      this.array = ["美国", "中国", "巴西", "日本"]
    },
    cancel() {
      console.log('[page1]: cancel')
    }
  })
</script>

<style>

</style>