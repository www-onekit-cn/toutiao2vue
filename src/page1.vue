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
    <onekit-view onekit-class="section__title">多列选择器</onekit-view>
    <onekit-picker mode="multiSelector" @Change="bindMultiPickerChange" @Columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
      <onekit-view onekit-class="picker">
        当前选择：{{multiArray[0][multiIndex[0]]}}，
        {{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
      </onekit-view>
    </onekit-picker>

  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  // import tt from '../toutiao2vue/tt'
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


  const ms = [
    [
      "无脊柱动物",
      "脊柱动物"
    ],
    [
      [
        "扁性动物",
        "线形动物",
        "环节动物",
        "软体动物",
        "节肢动物"
      ],
      [
        "鱼",
        "两栖动物",
        "爬行动物",
        "test"
      ]
    ],
    [
      [
        [
          "猪肉绦虫",
          "吸血虫"
        ],
        [
          "蛔虫"
        ],
        [
          "蚂蚁",
          "蚂蟥"
        ],
        [
          "河蚌",
          "蜗牛",
          "蛞蝓"
        ],
        [
          "昆虫",
          "甲壳动物",
          "蛛形动物",
          "多足动物"
        ]
      ],
      [
        [
          "鲫鱼",
          "带鱼"
        ],
        [
          "青蛙",
          "娃娃鱼"
        ],
        [
          "蜥蜴",
          "龟",
          "壁虎"
        ],
        []
      ]
    ]
  ]
  export default OnekitPage({}, {
    data: {
      multiArray: [
        [
          "无脊柱动物",
          "脊柱动物"
        ],
        [
          "扁性动物",
          "线形动物",
          "环节动物",
          "软体动物",
          "节肢动物"
        ],
        [
          "猪肉绦虫",
          "吸血虫"
        ]
      ],
      multiIndex: [
        0,
        0,
        0
      ],
    },
    bindMultiPickerChange: function (e) {
      console.log(e.detail.value)
      console.log("picker发送选择改变，携带值为", e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    bindMultiPickerColumnChange: function (e) {
      console.log("修改的列为", e.detail.column, "，值为", e.detail.value)
      const data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      }
      switch (e.detail.column) {
      case 0:
        data.multiIndex[0] = e.detail.value;
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        data.multiArray[1] = ms[1][data.multiIndex[0]];
        data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
        break;
      case 1:
        data.multiIndex[1] = e.detail.value;
        data.multiIndex[2] = 0;
        data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
        break;
      case 2:
        data.multiIndex[2] = e.detail.value;
        break;
      }
      this.data = data
    }
  })
</script>

<style>

</style>