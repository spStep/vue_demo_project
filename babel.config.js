/*
 * @Author: jin jie
 * @LastEditors: jin jie
 * @Date: 2020-03-08 19:42:11
 * @LastEditTime: 2020-03-09 18:08:05
 * @Description: 注释
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'entry'
    }
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import']
}
