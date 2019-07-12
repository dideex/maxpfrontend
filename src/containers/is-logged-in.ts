import { TypeOfConnect } from '../store/types'
import { connect } from 'react-redux'
import { RootStore } from '../store'

interface IAuthContainer {
  isAuth: boolean
}
export const isLoggedIn = connect(
  (state: RootStore): IAuthContainer => ({ isAuth: Boolean(state.user.userName) }),
  null,
  null,
  { pure: false },
)

export type isLoggedInProps = {} & TypeOfConnect<typeof isLoggedIn>
