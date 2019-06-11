import React, { Component } from 'react'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

// import AppLayout from './layout'
import ReduxApp from './store/redux-app'
import { store } from './store/redux'

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <RouterProvider>
          <ReduxApp />
        </RouterProvider>
      </ReduxProvider>
    )
  }
}

export default App
