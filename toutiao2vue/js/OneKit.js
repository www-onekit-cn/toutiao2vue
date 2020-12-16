/*
 * @Autor: YeWei Wang
 * @Date: 2020-12-16 14:57:19
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2020-12-16 15:17:18
 * @Version: 1.0
 * @FilePath: \toutiao2vue\toutiao2vue\js\OneKit.js
 */
import Vue from 'vue'

export default class OneKit{

static current() {
  return Vue.prototype.CURRENT;
}

static currentUrl() {
  return this.current().$route.path;
}

}