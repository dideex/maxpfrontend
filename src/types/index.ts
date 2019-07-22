import { IUser } from '../store/user/types'

export type TLoading = 'IDLE' | 'LOADING' | 'LOADED' | 'ERROR'
export interface INews {
  title: String
  body: String
  author: IUser
  date: Number
}
