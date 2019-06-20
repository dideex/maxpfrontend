// import { IUserRequest } from '../models/user'
import { IUserRequest } from '../store/user/types'
import config from '../config'
import { IUser } from '../store/redux/types'

const incorrect_login_or_password = 'incorrect_login_or_password'

interface IResponseErrorLogOrPwd {
  errorText: typeof incorrect_login_or_password
  status: 500 | 404
}

export type IResponseError = IResponseErrorLogOrPwd

export interface IAuthResponse {
  status: number
  data?: IUser
  errorText?: IResponseError
}

const checkCredentials = (data: IUserRequest): boolean => {
  if (
    data.username.toLowerCase() === 'admin' &&
    data.password.toLowerCase() === '12345'
  ) {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserRequest): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    setTimeout(() => {
      if (!checkCredentials(data)) {
        reject({
          status: 500,
          errorText: incorrect_login_or_password,
        })
      }
      window.localStorage.setItem(config.tokenKey, 'true')
      resolve({
        status: 200,
        data: {
          userName: 'Admin',
          avatar: 'avatar.jpg',
          age: 23,
          email: 'myemail@mail.com',
          gender: 'man',
        },
      })
    }, 3000)
  })

  return promise
}

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem(config.tokenKey)) {
    return true
  } else {
    return false
  }
}

export const logout = (): void => {
  window.localStorage.removeItem(config.tokenKey)
}

export const loadInitialData = () => {}
