/*
 * @Description: 文件简介
 * @Date: 2021-05-31 11:13:48
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-05-31 11:17:47
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'],
      // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
}
