import { unboxThunk, TypeOfConnect } from '../store/types'
import { connect } from 'react-redux'
import { RootStore } from '../store'
import { authUser } from '../store/user/saga'

export const authContainer = connect(
  (state: RootStore) => ({ ...state }),
  { authUser: unboxThunk(authUser) },
  null,
  { pure: false },
)

export type authStoreProps = {} & TypeOfConnect<typeof authContainer>
