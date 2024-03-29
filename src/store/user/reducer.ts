import { UserStore, ActionTypes } from './types'

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

    case 'getUserDataRequest':
      return { ...initialState, loading: 'LOADING' }

    case 'getUserDataSuccess':
      return { ...action.payload.user, loading: 'LOADED' }

    case 'getUserDataFail':
      return {
        ...initialState,
        ...action.payload.err,
        loading: 'ERROR',
      }

    default:
      return state
  }
}
