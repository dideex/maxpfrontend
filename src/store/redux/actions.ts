import * as constants from '../../constants'
import { IUser, IUserError } from './types'

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg
}

interface IInit {
    type: typeof constants.init
    payload?: any
  }

export const init = () => ({
  type: 'init',
} as const)

export const reset = () => ({
  type: 'reset',
} as const)

export const inc = (val: number) => ({
  type: 'inc',
  payload: { val },
} as const)

export const getUserDataSuccess = (user: IUser) => ({
  type: 'getUserDataSuccess',
  payload: { user },
} as const)

export const getUserDataFail = (err: IUserError) => ({
  type: 'getUserDataFail',
  payload: { err },
} as const)
