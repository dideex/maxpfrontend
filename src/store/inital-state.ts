export interface INews {
  title: string
  body: string
  author: string
  date: string
}
export interface IUser {
  username: string | null
  avatar: string | null
  age: number | null
  email: string | null
  gender: 'man' | 'woman' | null
}


const user: IUser = {
  username: null,
  avatar: null,
  age: null,
  email: null,
  gender: null
}

const news: INews[] | [] = []

const initalStore = { user, news }
export default initalStore
