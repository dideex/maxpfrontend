import { TLoading } from '../../types'
import { IResponseError } from '../../api'

export interface IUser {
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman' | null
}

export interface INetworkStatus {
  loading: TLoading
}

export interface INetworkError {
  error?: IResponseError
}

export type UserStore = IUser & INetworkStatus & INetworkError
