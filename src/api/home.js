/*
 * @Description: 文件简介
 * @Date: 2021-06-03 10:18:55
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 11:21:31
 */
import axios from '../utils/http'

// 查询汇总数据
export const qrySummarizeNum = (params) => {
  return axios.get('center_users_nums', { params })
}

// 查询用户增长数据
export const qrySummarizeData = (params) => {
  return axios.get('center_users_data', { params })
}

// 查询用户年龄数据
export const qrySummarizeAge = (params) => {
  return axios.get('center_users_age', { params })
}
