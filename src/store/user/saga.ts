import { call, put, all, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

import API from '../../api'

import { AUTH_USER_REQUEST, IUser, ActionTypes } from './types'
import { authUserSuccess, authUserRequest } from './actions'

function* rootSaga() {
  yield all([userSaga()])
}

function* userSaga(): SagaIterator {
  yield takeLatest<ActionTypes>(AUTH_USER_REQUEST, authUser)
}

function* authUser(data: ActionTypes): SagaIterator {
  const { payload } = data
  const userInfo: IUser = yield call(API.authenticate, payload)
  yield put(authUserSuccess(userInfo))
}

export default rootSaga
