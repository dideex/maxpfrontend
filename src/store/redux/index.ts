import { createStore, Action, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { createLogger } from 'redux-logger'

import * as actions from './actions'
import { authenticate, IUserRequest } from '../../api'
import { reducer } from './reducer';




export const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
)
