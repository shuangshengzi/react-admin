import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import User from '../views/user/index.jsx'

import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import '../styles/layout/index.css'

const { Header, Sider, Content } = Layout
export default class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  changeMenu = e => {
    console.log('menu click:', e)
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.changeMenu}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/layout/user">
                  nav 1
                </Link>
            </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              
              <Route path="/user" component={User} />
          </Content>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}