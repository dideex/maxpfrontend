// import { IUserRequest } from '../models/user'
import { IUserRequest, IUser } from '../store/user/types'
import config from '../config'

const incorrect_login_or_password = 'incorrect_login_or_password'

interface IResponseErrorLogOrPwd {
  errorText: typeof incorrect_login_or_password
}

export type IResponseError = IResponseErrorLogOrPwd

interface IAuthResponse {
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
        loggedIn: true,
        userName: 'Admin',
        avatar: 'avatar.jpg',
        age: 23,
        email: 'myemail@mail.com',
        gender: 'man',
        loading: 'LOADED',
      },
    })
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
