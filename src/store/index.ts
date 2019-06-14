import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducers as userReducer } from './user'

import initialState from './inital-state'

const reducer = combineReducers({
  user: userReducer
})

const middleWareEnhancer = applyMiddleware(thunk, createLogger())
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(middleWareEnhancer)
)

export default store
