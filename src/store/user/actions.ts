import {
  IUserRequest,
  IUser,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS
} from './types'

export function authUserRequest(values: IUserRequest) {
  return {
    type: AUTH_USER_REQUEST,
    payload: values
  } as const
}
export function authUserSuccess(user: IUser) {
  return {
    type: AUTH_USER_SUCCESS,
    payload: user
  } as const
}

// export default { authUserRequest, authUserSuccess }
