import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducers as userReducer } from './user'

import initialState from './inital-state'

const reducer = combineReducers({
  user: userReducer
})

const middlewares: [] = []
const middleWareEnhancer = applyMiddleware(...middlewares)
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(middleWareEnhancer)
)

export default store
