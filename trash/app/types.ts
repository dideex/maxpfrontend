export const LOAD_INITIAL_DATA = 'app/LOAD_INITIAL_DATA'
export const LOAD_INITIAL_DATA_INPROGRESS = 'app/LOAD_INITIAL_DATA_INPROGRESS'
export const LOAD_INITIAL_DATA_SUCCESS = 'app/LOAD_INITIAL_DATA_SUCCESS'
export const LOAD_INITIAL_DATA_FAILED = 'app/LOAD_INITIAL_DATA_FAILED'
export const INC_CLICK_COUNT = 'app/INC_CLICK_COUNT'

interface IInitialDataAction {
  type: typeof LOAD_INITIAL_DATA
}
interface IInitialDataInprogressAction {
  type: typeof LOAD_INITIAL_DATA_INPROGRESS
}
interface IInitialDataSuccessAction {
  type: typeof LOAD_INITIAL_DATA_SUCCESS
}
interface IInitialDataFailedAction {
  type: typeof LOAD_INITIAL_DATA_FAILED
}
interface IIncClickAction {
  type: typeof INC_CLICK_COUNT
}

export type TInitialDataActions =
  | IInitialDataAction
  | IInitialDataInprogressAction
  | IInitialDataSuccessAction
  | IInitialDataFailedAction
  | IIncClickAction
