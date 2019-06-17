import { TLoading } from '../../types'

export interface IUser {
  loggedIn: boolean
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman'
  loading: TLoading
}

export interface IUserError {
  message: string
}
