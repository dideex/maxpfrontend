export interface IUser {
  loggedIn: boolean
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman'
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: IUser
}

export type SystemActionTypes = UpdateSessionAction