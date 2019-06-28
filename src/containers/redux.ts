import { unboxThunk, TypeOfConnect } from '../store/types'
import { connect } from 'react-redux'
import { RootStore } from '../store'
import { init, inc } from '../store/user/actions'
import { thunkAction, authUser } from '../store/user/saga'

export const reduxStoreEnhancer = connect(
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

export type ReduxProps = {} & TypeOfConnect<typeof reduxStoreEnhancer>

export default reduxStoreEnhancer
