import { call, put, takeEvery } from 'redux-saga/effects'
import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  IUser,
  IUserRequest,
  TUserAction
} from './types'
import { authUserSuccess } from './action'

function* rootSaga() {
  yield takeEvery<TUserAction>(AUTH_USER_REQUEST, authUser)
}

function* authUser(user: IUserRequest) {
  const userInfo: IUser = {
    userName: user.username,
    avatar: '',
    gender: 'man',
    loggedIn: true,
    loading: 'LOADED',
    email: '',
    age: 20
  }
  yield put(authUserSuccess(userInfo))
}
