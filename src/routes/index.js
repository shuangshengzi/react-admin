import { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from '../layout/login.jsx'
import Layout from '../layout/index.jsx'
import User from '../views/user/index.jsx'

class RouterMap extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/layout" component={Layout} exact />
          <Route path="/layout/user" component={User} exact />
          <Redirect to="/login" />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouterMap