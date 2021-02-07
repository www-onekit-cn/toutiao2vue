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
    <onekit-view onekit-class="section__title">日期选择器</onekit-view>
    <onekit-picker mode="date" :value="date" start="1999-09-01" end="2023-09-01" @Change="bindDateChange" fields="year">
      <onekit-view onekit-class="picker"> 当前选择: {{date}} </onekit-view>
    </onekit-picker>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
  export default OnekitPage({}, {
    data: {
      date: "2016-09-01",
    },
    bindDateChange: function (e) {
      console.log("picker发送选择改变，携带值为", e)
      this.setData({
        date: e.detail.value
      })
    },
  })
</script>

<style>

</style>