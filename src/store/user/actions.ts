import {
  IUserRequest,
  IUser,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
} from './types'

export function authUserRequest(values: IUserRequest) {
  return {
    type: AUTH_USER_REQUEST,
    payload: values,
  } as const
}

export function authUserSuccess(user: IUser) {
  return {
    type: AUTH_USER_SUCCESS,
    payload: user,
  } as const
}

export function authUserError(user: IUser) {
  return {
    type: AUTH_USER_ERROR,
    payload: user,
  } as const
}
