import {
  LOAD_INITIAL_DATA,
  LOAD_INITIAL_DATA_INPROGRESS,
  LOAD_INITIAL_DATA_SUCCESS,
  LOAD_INITIAL_DATA_FAILED,
  INC_CLICK_COUNT,
  TInitialDataActions
} from './types'

export const loadInitialData = (): TInitialDataActions => {
  return {
    type: LOAD_INITIAL_DATA
  }
}

export const loadInitialDataInProgress = (): TInitialDataActions => {
  return {
    type: LOAD_INITIAL_DATA_INPROGRESS
  }
}

export const loadInitialDataSuccess = (): TInitialDataActions => {
  return {
    type: LOAD_INITIAL_DATA_SUCCESS
  }
}

export const loadInitialDataFailed = (): TInitialDataActions => {
  return {
    type: LOAD_INITIAL_DATA_FAILED
  }
}

export const incrementClickCount = (): TInitialDataActions => {
  return {
    type: INC_CLICK_COUNT
  }
}
