import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../components/header'
import { Home, Profile, Login, News } from '../routes'

const Layout: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/news" exact component={News} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Home} />
    </Switch>
  </>
)

export default Layout
