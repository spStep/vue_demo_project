/*
 * @Author: jin jie
 * @LastEditors: jin jie
 * @Date: 2020-03-09 17:14:03
 * @LastEditTime: 2020-03-11 20:56:15
 * @Description: 注释
 */

 const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
 pluginOptions: {
   'style-resources-loader': {
     preProcessor: 'stylus',
     patterns: ['./src/styles/layout.stylus']
   }
 },
 configureWebpack: config => {
   if (process.env.NODE_ENV !== 'development') {
     config.optimization = {
       minimizer: [
         new TerserPlugin({
           terserOptions: {
             safari10: true
           },
           parallel: true
         })
       ]
     }
   }
 }
}
