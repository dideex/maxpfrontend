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
type AppState = { username: string; password: string }

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    username: '',
    password: '',
  }
  componentDidMount() {
    this.props.init()
  }
  _handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.inc(Number(this.props.a) + 1)
  }
  _handleAuth = () => {
    this.props.authUser({ ...this.state })
  }
  _handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({ ...this.state, [name]: event.target.value })
  }
  render() {
    return (
      <>
        <div>{this.props.a}</div>
        <div>{this.props.b}</div>
        <div>{String(this.props.c)}</div>
        <input
          type="text"
          value={this.state.username}
          onChange={this._handleChange('username')}
        />
        <input
          type="text"
          value={this.state.password}
          onChange={this._handleChange('password')}
        />
        <button onClick={this._handleAuth}>Login</button>
        <button onClick={this._handleClick}>Inc</button>
      </>
    )
  }
}

export default storeEnhancer(App)
