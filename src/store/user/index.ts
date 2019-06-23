import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { UserStore } from './types'
import { reducer } from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk, createLogger()))

export type UserStore = UserStore
export { reducer, initialState } from './reducer'
