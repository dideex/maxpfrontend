import { TLoading } from '../../types'

export interface IUser {
  loggedIn: boolean
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman' | null
  loading: TLoading
}

export interface IUserRequest {
  username: string
  password: string
}

export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST'
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR'

export interface UserAuthActionRequest {
  type: typeof AUTH_USER_REQUEST
  payload: IUserRequest
}
export interface UserAuthActionSuccess {
  type: typeof AUTH_USER_SUCCESS
  payload: IUser
}
export interface UserAuthActionError {
  type: typeof AUTH_USER_ERROR
  payload: never
}

export type TUserAction =
  | UserAuthActionRequest
  | UserAuthActionSuccess
  | UserAuthActionError
