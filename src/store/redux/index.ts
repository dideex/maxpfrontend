import { createStore, Action, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { InferableComponentEnhancerWithProps } from 'react-redux'
import * as constants from "../../constants";

import * as actions from './actions'

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never

export type CutMiddleFunction<T> = T extends (
  ...arg: infer Args
) => (...args: any[]) => infer R
  ? (...arg: Args) => R
  : never

export const unboxThunk = <Args extends any[], R, S, E, A extends Action<any>>(
  thunkFn: (...args: Args) => ThunkAction<R, S, E, A>,
) => (thunkFn as any) as CutMiddleFunction<typeof thunkFn>

export type RootStore = {
  a: number
  b: string
  c: boolean
}

const initialState: RootStore = {
  a: 0,
  b: 'initial',
  c: false,
}

export const thunkAction = (
  delay: number,
): ThunkAction<void, RootStore, void, AnyAction> => dispatch => {
  setTimeout(() => {
    dispatch(actions.reset())
  }, delay)
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>


const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case constants.init:
      return {
        ...state,
        a: state.a + 1,
        b: 'updated',
        c: true,
      }

    case constants.reset:
      return {
        ...initialState,
      }

    case 'inc':
      return {
        ...state,
        a: action.payload.val,
      }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
)
