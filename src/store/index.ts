import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer as userReducer, initialState as userInitialState } from './redux'

const initialState = {
  user: userInitialState
}

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
