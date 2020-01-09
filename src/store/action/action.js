/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-09 11:16:27
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 16:52:11
 */
import setLoginInfo from '../actionType/actionType'
const setLoginData = (dispatch,data)=>{
  console.log(data)
  return dispatch({
    type:setLoginInfo,
    data:data
  })
}
export default setLoginData