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
    <onekit-page id='app'>
      <onekit-view onekit-class="section__title">时间选择器</onekit-view>
      <onekit-picker mode="time" :value="time" :start="timeStart" :end="timeEnd" @Change="bindTimeChange">
        <onekit-view onekit-class="picker"> 当前选择: {{time}} </onekit-view>
      </onekit-picker>
    </onekit-page>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      time: "12:01",
      timeStart: "09:01",
      timeEnd: "21:01"
    },
    bindTimeChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.detail.value)
      this.setData({
        time: e.detail.value
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