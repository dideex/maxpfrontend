import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    )
  }
}

export default App
