import {
  ActionTypes,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  IUser,
} from './types'

const initialState: IUser = {
  loggedIn: false,
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: null,
  loading: 'IDLE',
}

export function userReducer(state = initialState, action: ActionTypes): IUser {
  const { type, payload } = action
  switch (type) {
    case AUTH_USER_REQUEST: {
      return {
        ...state,
        loading: 'LOADING',
      }
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: 'LOADED',
      }
    }
    case AUTH_USER_ERROR: {
      return {
        ...state,
        loading: 'ERROR',
      }
    }
    default:
      return state
  }
}

export default userReducer
