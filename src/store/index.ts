import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducer'
import initialState from './inital-state'

const middlewares: [] = []
const middleWareEnhancer = applyMiddleware(...middlewares)
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(middleWareEnhancer)
)

export default store
