import { unboxThunk, TypeOfConnect } from '../store/types'
import { connect } from 'react-redux'
import { RootStore } from '../store'
import { init, inc } from '../store/user/actions'
import { thunkAction, authUser } from '../store/user/saga'
import App from '../store/app'

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
)(App)

export type AppProps = {} & TypeOfConnect<typeof storeEnhancer>

export default storeEnhancer
