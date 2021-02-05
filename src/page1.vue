<template>
  <!-- <onekit-page id="app">
    <onekit-view>单列选择器</onekit-view>
    <onekit-picker mode="selector"
                   :range="array"
                   @cancel="cancel"
                   @Change="change"
                   :disabled="false">
      <onekit-view>当前选择： {{array[index]}}</onekit-view>
    </onekit-picker>

    <onekit-view>地区</onekit-view>
    <onekit-picker mode="region" @Change="regionchange">
      <onekit-view>当前选择地区：<br>
        省: {{region[0]}} <br>
        市：{{region[1]}} <br>
        区： {{region[2]}}</onekit-view>
    </onekit-picker>

  </onekit-page> -->
  <onekit-page id='app'>
    <onekit-view onekit-class="section__title">普通选择器</onekit-view>
    <onekit-picker :value="index" :range="multiArray" @Change="bindPickerChange" @Cancel="bindPickerCancel" mode="multiSelector">
      <onekit-view onekit-class="picker"> 当前选择：{{multiArray[index]}} </onekit-view>
    </onekit-picker>
  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  // export default OnekitPage({}, {
  //   data: {
  //     array: ["美国", "中国", "巴西", "日本"],
  //     index: 0,
  //     region: ''
  //   },
  //   onLoad() {

  //   },
  //   cancel() {
  //     console.log('[page1]: cancel')
  //   },
  //   change(data) {
  //     // console.log('i am run')
  //     // console.log(data)
  //     this.setData({
  //       index: data.detail.value,
  //     });
  //     // this.index = data.detail.value
  //   },
  //   regionchange(data) {
  //     this.region = data.detail.value
  //   }
  // })


  export default OnekitPage({}, {
    data: {
      array: [
        "美国",
        "中国",
        "巴西",
        "日本"
      ],
      multiArray: [
        ["无脊柱动物", "脊柱动物"],
        ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"],
        ["猪肉绦虫", "吸血虫"],
      ],
      index: 0
    },
    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    bindPickerCancel: function (e) {
      console.log(e)
      tt.showToast({
        title: "cancel"
      })
    }
  })
</script>

<style>

</style>