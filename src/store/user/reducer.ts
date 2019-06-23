import { UserStore, ActionTypes } from './types'

export const initialState: UserStore = {
  userName: '',
  avatar: '',
  age: 0,
  email: '',
  gender: null,
  loading: 'IDLE',
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
      return { loading: 'LOADED', ...action.payload.user }

    case 'getUserDataFail':
      return {
        ...initialState,
        ...action.payload.err,
      }

    default:
      return state
  }
}
