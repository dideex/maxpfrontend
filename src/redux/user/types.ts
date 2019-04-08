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

interface UsetAuthAction {
  type: typeof AUTH_USER_REQUEST
  payload: IUserRequest
}

export type TUserAuthAction = UsetAuthAction
