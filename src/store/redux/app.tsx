import React from 'react'
import { connect } from 'react-redux'

import {
  RootStore,
  TypeOfConnect,
  thunkAction,
  unboxThunk,
  authUser,
} from './index'

import { init, inc } from './actions'

const storeEnhancer = connect(
  (state: RootStore) => ({
    ...state,
  }),
  {
    init,
    inc,
    thunkAction: unboxThunk(thunkAction),
    authUser: unboxThunk(authUser),
  },
  null,
  { pure: false },
)

type AppProps = {} & TypeOfConnect<typeof storeEnhancer>

class App extends React.PureComponent<AppProps> {
  componentDidMount() {
    this.props.init()
    this.props.thunkAction(3000)
    this.props.authUser({ username: 'Admin', password: '12345' })
  }
  _handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.inc(Number(this.props.a) + 1)
  }
  render() {
    return (
      <>
        <div>{this.props.a}</div>
        <div>{this.props.b}</div>
        <div>{String(this.props.c)}</div>
        <button onClick={this._handleClick}>Inc</button>
      </>
    )
  }
}

export default storeEnhancer(App)
