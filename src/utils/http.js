/*
 * @Description: 文件简介
 * @Date: 2021-05-31 16:48:18
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-06-03 11:25:11
 */
import axios from 'axios'
import { Toast } from 'vant'
axios.defaults.baseURL = 'https://outdoor.yantianzz.com/api/welink' //测试

//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'
//设置超时
axios.defaults.timeout = 10000
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    Toast.loading({
      duration: 0,
      message: '数据加载中...',
      forbidClick: true,
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    Toast.clear()
    if (res.status == 200) {
      if (res.data.code === 2000) {
        return Promise.resolve(res.data)
      } else {
        Toast.fail({
          message: res.msg,
        })
      }
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    Toast.fail({
      message: error,
    })
  }
)
export default axios
