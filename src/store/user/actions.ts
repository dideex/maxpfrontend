import {
  IUserRequest,
  AUTH_USER_REQUEST,
  TUserAction,
  IUser,
  AUTH_USER_SUCCESS
} from './types'

export function authUserRequest(values: IUserRequest): TUserAction {
  return {
    type: AUTH_USER_REQUEST,
    payload: values
  }
}
export function authUserSuccess(user: IUser): TUserAction {
  return {
    type: AUTH_USER_SUCCESS,
    payload: user
  }
}

export default { authUserRequest, authUserSuccess }

/* import { createActions } from 'redux-actions'

export const { user } = createActions({
  USER: {
    REQUEST: {
      AUTH: (username, password) => ({ username, password }),
      DATA: payload => payload
    },
    SUCCESS: {
      AUTH: payload => payload,
      DATA: payload => payload
    }
  }
})
 */
