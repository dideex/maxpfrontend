import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../components/header'
import { Home, Profile, Login, News } from '../routes'
import Redux from '../store/app'

const Layout: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/redux" component={Redux} />
      <Route path="/" exact component={Home} />
    </Switch>
  </>
)

export default Layout
