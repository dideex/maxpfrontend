import { call, put, takeEvery } from 'redux-saga/effects'

import { LOAD_INITIAL_DATA } from './types'

import {
  loadInitialDataFailed,
  loadInitialDataInProgress,
  loadInitialDataSuccess
} from './actions'

import API from '../../api'

export function* loadInitialData() {
  try {
    yield put(loadInitialDataInProgress())

    yield call(API.loadInitialData)
    yield put(loadInitialDataSuccess())
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
    yield put(loadInitialDataFailed())
  }
}

export default function* loadInitialDataWatcher() {
  yield takeEvery(LOAD_INITIAL_DATA, loadInitialData)
}
