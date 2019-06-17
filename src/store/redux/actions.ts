import * as constants from '../../constants'
import { IUser, IUserError } from './types'

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg
}

export const init = () => ({
  type: inferLiteralFromString('init'),
})

export const reset = () => ({
  type: inferLiteralFromString('reset'),
})

export const inc = (val: number) => ({
  type: inferLiteralFromString('inc'),
  payload: { val },
})

export const getUserDataSuccess = (user: IUser) => ({
  type: inferLiteralFromString('getUserDataSuccess'),
  payload: { user },
})

export const getUserDataFail = (err: IUserError) => ({
  type: inferLiteralFromString('getUserDataFail'),
  payload: { err },
})
