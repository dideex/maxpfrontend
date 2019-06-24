import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import { init, inc } from './user/actions'
import { unboxThunk, TypeOfConnect } from './types'
import { thunkAction, authUser } from './user/saga'
import { RootStore } from '.'

const storeEnhancer = connect(
  (state: RootStore) => ({ ...state }),
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
  _handleAuth = () => {
    this.props.authUser({ ...this.state })
  }
  _handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.value })
  }
  render() {
    const { user } = this.props
    return (
      <>
        {user.loading === 'LOADING' ? (
          <CircularProgress />
        ) : (
          <>
            <div>{user.age}</div>
            <div>{user.email}</div>
            <div>{user.gender}</div>
            <div>{user.loading}</div>
          </>
        )}
        {user.error && <div>{user.error}</div>}
        <input type="text" value={this.state.username} onChange={this._handleChange('username')} />
        <input type="text" value={this.state.password} onChange={this._handleChange('password')} />
        <button onClick={this._handleAuth}>Login</button>
      </>
    )
  }
}

export default storeEnhancer(App)
