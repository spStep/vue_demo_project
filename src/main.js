/*
 * @Author: jin jie
 * @LastEditors: jin jie
 * @Date: 2020-03-08 19:42:11
 * @LastEditTime: 2020-03-09 16:58:06
 * @Description: 注释
 */
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
