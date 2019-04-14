// import { IUserRequest } from '../models/user'
import { IUserRequest } from '../store/user/types'
import config from '../config'

interface IAuthResponse {
  status: number
  data?: any
  errorText?: string
}

const checkCredentials = (data: IUserRequest): boolean => {
  if (data.username === 'Admin' && data.password === '12345') {
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
        errorText: 'incorrect_login_or_password'
      })
    }
    window.localStorage.setItem(config.tokenKey, 'true')
    resolve({
      status: 200,
      data: 'ok'
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