import { combineReducers } from 'redux'

const reducer = ({ value }) => ({
  type: 'REQUEST',
  payload: value
})

export default combineReducers({})
