/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-08 10:30:49
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 10:14:15
 */
import Login from '../views/login'
import ContentName from '../views/content'
import Error from '../views/404'
import Home from '../views/home'
const routes = [
  
  // {
  //   path:'/',
  //   component:Login,
  //   exact:true
  // },
  {
    path:'/login',
    component:Login,
    exact:false
  },
  {
    path:'/',
    exact:true,
    redirect:'/login'
  },
  {
    path:'/home',
    component:Home,
    exact:false,
    children:[
      {
        path:'/home/:id',
        component:ContentName,
        exact:true
      }
    ]
  },
  // {
  //   path:'*',
  //   component:Error,
    
  // }
]
export default routes