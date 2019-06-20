export interface INews {
  title: string
  body: string
  author: string
  date: string
}

import { IUser } from './redux/types'

const user: IUser = {
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: 'man',
}

const news: INews[] = []

const initalStore = { user, news }
export default initalStore
