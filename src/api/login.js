/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-12-31 19:47:58
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-07 16:57:42
 */
import axios from '../http'

 async function LoginApi(userName,passWord){
  console.log(userName,passWord)
let res = await axios.get(`/api/user/login?userName=${userName}&passWord=${passWord}`)
console.log(res.data)
  return res
}
export default LoginApi