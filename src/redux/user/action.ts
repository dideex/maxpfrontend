import { IUserRequest, AUTH_USER_REQUEST, TUserAuthAction } from './types'

export function authUserRequest(values: IUserRequest): TUserAuthAction {
  return {
    type: AUTH_USER_REQUEST,
    payload: values
  }
}

export default { authUserRequest }

/* import { createActions } from 'redux-actions'

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
 */
