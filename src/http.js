/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-07 16:56:28
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-07 17:00:23
 */
import axios from 'axios'
axios.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  })
axios.interceptors.response.use(
  config => {
    console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  })
  export default axios