import { TypeOfConnect } from '../store/types'
import { connect } from 'react-redux'
import { RootStore } from '../store'

export const isLoggedIn = connect(
  (state: RootStore) => ({ isAuth: Boolean(state.user.userName), isLoading: state.user.loading === 'LOADING' }),
  {},
  null,
  { pure: false },
)

export type isLoggedInProps = {} & TypeOfConnect<typeof isLoggedIn>
