import React, { Component } from 'react'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import AppLayout from './layout'
import store from './store'

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <RouterProvider>
          <AppLayout />
        </RouterProvider>
      </ReduxProvider>
    )
  }
}

export default App
