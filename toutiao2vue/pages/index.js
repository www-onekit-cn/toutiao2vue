/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-14 13:53:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-26 16:54:30
 * @Version: 1.0
 * @FilePath: \toutiao2vue\toutiao2vue\pages\index.js
 */
import activity from './activity'
import chooselocation from './chooselocation'
import tabs from './tabs'


export default {
    install(Vue) {
        Vue.use(activity)
        Vue.use(chooselocation)
        Vue.use(tabs)
    },
}