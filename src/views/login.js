/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-12-31 11:08:38
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 16:53:58
 */
import React,{Component}from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import LoginApi from '../api/login'
import {connect} from 'react-redux'
import actions from '../store/action/action'
import {withRouter } from 'react-router-dom';

import '../css/login.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
 handleSubmit = e => {
    e.preventDefault();
    console.log(this.props)
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let res = await LoginApi(values.username,values.password)
        console.log(res)
        if(res && res.data.code === 1){
          this.props.history.push('/home/home')
          this.props.setLoginData({username:res.data.data[0].userName,passWord:res.data.data[0].age})
        }else{
          message.error('用户名或密码不正确');
        }
      }
    });
  };
  render() { 
    console.log(actions)
    const {getFieldDecorator} = this.props.form
    return ( 
     <div>
       <div className='login-box'>
         <img src={require('../img/logo.png')} alt=""/>
         <div className = 'login-input'>
         <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
          )}
          </Form.Item>
          <Form.Item>
           
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
           
          </Form.Item>
      </Form>
         </div>
        
       </div>
     </div>
     );
  }
}
 function mapDisptchToProps(dispatch,ownProps){
  return{
    setLoginData:(...args) => dispatch(actions(dispatch,...args))
  }
 }
 function mapStateToProps(state,ownProps){
  return{
    uaerdata:state
  }
 }
export default Form.create()(connect(mapStateToProps,mapDisptchToProps)(Login));