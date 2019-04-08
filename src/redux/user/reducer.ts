import {
  TUserAuthAction,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  IUser
} from './types'

const initialState: IUser = {
  loggedIn: false,
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: null,
  loading: 'IDLE'
}

export function userReducer(
  state = initialState,
  action: TUserAuthAction
): IUser {
  const { type, payload } = action
  switch (type) {
    case AUTH_USER_REQUEST: {
      return {
        ...state,
        loading: 'LOADING'
      }
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        loading: '',
      }
    }
    default:
      return state
  }
}

export default { userReducer }
