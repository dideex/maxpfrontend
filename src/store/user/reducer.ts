import {
  ActionTypes,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
} from './types'
import { IUser } from '../redux/types'

const initialState: IUser = {
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: 'man',
}

export function userReducer(state = initialState, action: ActionTypes): IUser {
  const { type, payload } = action
  switch (type) {
    case AUTH_USER_REQUEST: {
      return {
        ...state,
      }
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        ...payload,
      }
    }
    case AUTH_USER_ERROR: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export default userReducer
