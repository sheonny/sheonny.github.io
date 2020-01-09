/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-03 10:22:42
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-09 16:47:38
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import ContentName from './content'
import {Route} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  menuClick = item =>{
    console.log(this.props)
    // this.props.history.push({
    //   path:'/home/',
    //   params:{
    //     ContentName:item.key
    //   }
    // })
    this.props.history.push(`/home/${item.key}`)
  }
  render() { 
    let child = this.props.routes.map((item,key)=>{
      return <Route key={key} path={item.path} component = {item.component} />
    })
    console.log(this.props.state.userName,this.props.state)
    return ( 
      <div>
         <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark"
             mode="inline" 
             defaultSelectedKeys={['home']}
             theme = 'dark'
             onClick = {this.menuClick}
             >
        <Menu.Item key="home">
          <Icon type="user" />
          <span className="nav-text">首页</span>
        </Menu.Item>
        <Menu.Item key="group">
          <Icon type="video-camera" />
          <span className="nav-text">团体用户</span>
        </Menu.Item>
        <Menu.Item key="personal">
          <Icon type="upload" />
          <span className="nav-text">个人用户</span>
        </Menu.Item>
        <Menu.Item key="disease">
          <Icon type="bar-chart" />
          <span className="nav-text">慢病管理</span>
        </Menu.Item>
        <Menu.Item key="message">
          <Icon type="cloud-o" />
          <span className="nav-text">消息管理</span>
        </Menu.Item>
        <Menu.Item key="template">
          <Icon type="appstore-o" />
          <span className="nav-text">模板管理</span>
        </Menu.Item>
        <Menu.Item key="system">
          <Icon type="team" />
          <span className="nav-text">系统管理</span>
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="team" />
    <span className="nav-text">{this.props.state.username}</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center',minHeight:'88vh' }}>
        {/* <Route path = '/home/:id' exat component = {ContentName} /> */}
        {child}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>这里是页脚</Footer>
    </Layout>
  </Layout>,
  mountNode,
      </div>
     );
  }
}
 const mapStateToProps=(state)=>{
   return{
     state
   }
 }
export default connect(mapStateToProps)(Home);