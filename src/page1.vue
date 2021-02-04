<template>
  <onekit-page id="app">
    <onekit-picker mode="selector"
                   :range="array"
                   @cancel="cancel"
                   @change="change"
                   :disabled="false">
      <onekit-view>当前选择： {{array[index]}}</onekit-view>
    </onekit-picker>
  </onekit-page>

</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      array: ["美国", "中国", "巴西", "日本"],
      index: 0
    },
    onLoad() {
      // this.array = 
    },
    cancel() {
      console.log('[page1]: cancel')
    },
    change(data) {
      this.index = data.detail.value
    }
  })
</script>

<style>

</style>