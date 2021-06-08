/*
 * @Description: 文件简介
 * @Date: 2021-06-03 16:56:31
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:17:40
 */
export default function getPieOpt(options) {
  return {
    color: ['#45D79E', '#59A817', '#38D4BC', '#45A2D7'],
    tooltip: {
      trigger: 'item',
    },
    grid: {
      left: -100,
    },

    series: [
      {
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: options.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
}
