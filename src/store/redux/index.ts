import { createStore, Action, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { InferableComponentEnhancerWithProps } from 'react-redux'
// import {  } from '../../api'
import * as constants from '../../constants'

import * as actions from './actions'
import { authenticate, IAuthResponse } from '../../api'
import { IUserRequest } from '../user/types'

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

export const authUser = (
  data: IUserRequest,
): ThunkAction<void, RootStore, void, AnyAction> => dispatch => {
  authenticate(data)
    .then(response => {
      console.log(response)
      if (response.data) {
        dispatch(actions.getUserDataSuccess(response.data))
      }
    })
    .catch(err => {
      if (err.errorText) {
        console.log('TCL: err', err)
        dispatch(actions.getUserDataFail(err))
      }
    })
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        a: state.a + 1,
        b: 'updated',
        c: true,
      }

    case 'reset':
      return {
        ...initialState,
      }

    case 'inc':
      return {
        ...state,
        a: action.payload.val,
      }

    case 'getUserDataSuccess':
      return {
        ...state,
        a: action.payload.user.age,
        b: action.payload.user.email,
      }

    case 'getUserDataFail':
      return {
        ...state,
        a: action.payload.err.status,
        b: action.payload.err.errorText,
      }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
)
