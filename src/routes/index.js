import { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Home from '../views/home/index.jsx'
import Good from '../views/good/index.jsx'

class RouterMap extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/good" component={Good} exact />
          <Redirect to="/home" />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouterMap