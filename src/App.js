/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-12-31 10:12:40
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-08 18:24:27
 */
import React from 'react';
import routes from './router/index'
import Error from './views/404'
import 'antd/dist/antd.css';
import {BrowserRouter ,Route,Router,Switch,Redirect} from 'react-router-dom'

function App() {
  let redirectAll = routes.filter((item,key) =>{
    return item.redirect
  })
  console.log(redirectAll)
  let redirect = redirectAll.map((item,i)=>{
    console.log(item)
    return <Redirect key='8' exact={item.exact} from={item.path} to = {item.redirect} />
  })
  console.log(redirect)
  let routess = routes.filter(item=>{
    return !item.redirect
  })
  console.log(routess)
  let routeAll =  routess.map((item, key) => {
    return <Route 
         exact={item.exact}
          key={key} 
          path={item.path} 
          render={props => (
            //主要是为了传递嵌套路由到子组件 
            //类似于 <User {...props} routes={routes} />
      <item.component {...props} routes={item.children} />
    )}
  />
}).concat(redirect)
console.log(routeAll)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
           
          {
           routeAll
          }
          <Route path="*" component = {Error} />>
          {/* <Route path='/login'  render={props => (
            //主要是为了传递嵌套路由到子组件 
            //类似于 <User {...props} routes={routes} />
      <Login {...props}  />
    )}
    ></Route>
          <Redirect exact from='/' to="/login"/> */}
        </Switch>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
