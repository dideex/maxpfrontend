import { call, put, all, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import API from '../../api'

import {
  AUTH_USER_REQUEST,
  IUser,
  UserAuthActionRequest
} from './types'
import { authUserSuccess } from './actions'

function* rootSaga() {
  yield all([userSaga()])
}

function* userSaga(): SagaIterator {
  yield takeLatest<UserAuthActionRequest>(AUTH_USER_REQUEST, authUser)
}

function* authUser(data: UserAuthActionRequest): SagaIterator {
  const { payload } = data
  const userInfo: IUser = yield call(API.authenticate, payload)
  yield put(authUserSuccess(userInfo))
}

export default rootSaga
