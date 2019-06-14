export interface INews {
  title: string
  body: string
  author: string
  date: string
}

import { IUser } from './user/types'

const user: IUser = {
  loggedIn: false,
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: null,
  loading: 'IDLE'
}

const news: INews[] = []

const initalStore = { user, news }
export default initalStore
