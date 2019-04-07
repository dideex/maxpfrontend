import { createActions } from 'redux-actions'

export const { user } = createActions({
  USER: {
    REQUEST: {
      AUTH: (username, password) => ({ username, password }),
      DATA: payload => payload
    },
    SUCCESS: {
      AUTH: payload => payload,
      DATA: payload => payload
    }
  }
})
