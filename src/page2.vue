<template>
  <page id="app">
    <h2>hello,world</h2>
    <onekit-view @Tap="navigateBack_click">tt.navigateBack</onekit-view>
    <onekit-view @Tap="reLaunch_click">tt.reLaunch</onekit-view>

  </page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    // onLoad(option) {
    //   console.log(option.query)
    //   const eventChannel = this.getOpenerEventChannel()
    //   eventChannel.emit('acceptDataFromOpenedPage', { data: 'test' });
    //   eventChannel.emit('someEvent', { data: 'test' });
    //   eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //     console.log("acceptDataFromOpenerPage", data)
    //   })
    // },
    navigateBack_click: function() {
      console.log('返回上一级')
      tt.navigateBack({
        delta: 1
      });
    },
    reLaunch_click: function() {
      console.log('re...')
      tt.reLaunch({
        url: '/page1',
        success: (res) => { console.log(res) },
        fail: console.log
      });
    },
  })
</script>

<style>

</style>