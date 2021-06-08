/*
 * @Description: 文件简介
 * @Date: 2021-06-03 15:28:21
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 15:31:31
 */
import axios from '../utils/http'

// 查询汇总数据
export const qrySummarizeNum = (params) => {
  return axios.get('test_users_nums', { params })
}

// 体测设备用户变化数
export const qrySummarizeData = (params) => {
  return axios.get('test_users_data', { params })
}

// 体测设备使用偏好
export const qryEquiptmentData = (params) => {
  return axios.get('test_equiptment_data', { params })
}

// 体测用户BIM分布情况
export const qryBMIData = (params) => {
  return axios.get('test_bim_data', { params })
}

// 体测合格率
export const qryMetabolismAge = (params) => {
  return axios.get('test_metabolism_data', { params })
}

// 体测体脂率分布情况
export const qryFatrateAge = (params) => {
  return axios.get('test_fatrate_data', { params })
}
