/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-09 11:13:40
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 14:12:12
 */
import loginReducer from './reducer/loginReducer'
import {createStore} from 'redux'
 const store = createStore(loginReducer)
 export default store