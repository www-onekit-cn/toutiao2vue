/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-26 17:31:16
 * @Version: 1.0
 * @FilePath: \toutiao2vue\src\app.json.js
 */
export default {
	"cloud":true,
	"debug":false,
	"navigateToMiniProgramAppIdList":[
		"wx4f1b24bdc99fa23b"
	],
	"networkTimeout":{
		"connectSocket":10000,
		"downloadFile":10000,
		"request":10000,
		"uploadFile":10000
	},
	"pages":[
		"page1",
		"page2",
		"page3"
	],
	"tabBar": {
    "list": [
      {
        "pagePath": "page1",
        "text": "Page 1"
      },
      {
        "pagePath": "page2",
        "text": "Page 2"
      }
    ]
  },
	"permission":{
		"scope.userLocation":{
			"desc":"你的位置信息将用于小程序位置接口的效果展示"
		}
	},
	"sitemapLocation":"sitemap.json",
	"window":{
		"backgroundColor":"#f8f8f8",
		"backgroundColorBottom":"#ffffff",
		"backgroundColorTop":"#ffffff",
		"backgroundTextStyle":"light",
		"enablePullDownRefresh":false,
		"navigationBarBackgroundColor":"#f8f8f8",
		"navigationBarTextStyle":"black",
		"navigationBarTitleText":"演示",
		"navigationStyle":"default",
		"onReachBottomDistance":50,
		"pageOrientation":"auto"
	},
	"workers":"workers"
}