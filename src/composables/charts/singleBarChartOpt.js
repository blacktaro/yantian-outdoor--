/*
 * @Description: 文件简介
 * @Date: 2021-06-03 11:26:35
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 14:13:19
 */
export default function getSingleBarOpt(options) {
  return {
    color: ['#59A817', '#38D4BC'],
    tooltip: {
      trigger: 'item',
    },
    grid: {
      left: '16%',
      right: '10px',
      bottom: '20px',
    },
    legend: {
      data: options.legend,
    },
    xAxis: [
      {
        type: 'category',
        data: options.xData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        // 切割线
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#E8E8E8'],
            type: 'dashed',
          },
        },
      },
    ],
    series: [
      {
        name: options.legend[0],
        type: 'bar',
        data: options.yData,
        label: {
          show: true, // 是否展示
          fontWeight: 'bolder',
          fontSize: '12',
          fontFamily: '微软雅黑',
          color: '#fff',
        },
      },
    ],
  }
}
