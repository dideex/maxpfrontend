import * as actions from './actions'
import { UserStore } from './types'

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export const initialState: UserStore = {
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: null,
  loading: 'IDLE',
  error: null,
}

export const reducer = (state = initialState, action: ActionTypes): UserStore => {
  switch (action.type) {
    case 'init':
      return initialState

    case 'reset':
      return initialState

    case 'inc':
      return {
        ...state,
        age: action.payload.val,
      }

    case 'getUserDataSuccess':
      return action.payload

    case 'getUserDataFail':
      return {
        ...state,
      }

    default:
      return state
  }
}
