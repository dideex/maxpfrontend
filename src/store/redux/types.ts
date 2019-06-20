export interface IUser {
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman'
}

export interface IUserError {
  message: string
}
