/*
 * @Description: 文件简介
 * @Date: 2021-06-03 11:26:52
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-04 13:58:13
 */
export default function getDoubleBarOpt(options) {
  return {
    color: ['#59A817', '#38D4BC'],
    tooltip: {
      trigger: 'axis',
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
        data: options.y1Data,
      },
      {
        name: options.legend[1],
        type: 'bar',
        data: options.y2Data,
      },
    ],
  }
}
