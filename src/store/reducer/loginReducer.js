/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-09 11:15:58
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 16:56:01
 */
// import action from '../action/action'
// import actionType from '../actionType/actionType'
export default function loginReducer(state={username:'hahaha',age:0},action){
  let newData = {...state}
  console.log(action.type)
  switch (action.type) {
    case 'SET_LOGIN_DATA':
      console.log(action.data)
      newData = {...action.data}
      console.log(newData)
      return newData
    default:
      return newData
  }
}