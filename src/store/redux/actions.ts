import { Action, AnyAction } from 'redux'

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg
}

type InitAction = Action<'init'>
type ResetAction = Action<'reset'>
type IncAction = AnyAction

export const init = () => ({
  type: inferLiteralFromString('init'),
})

export const reset = () => ({
  type: inferLiteralFromString('reset'),
})

export const inc = (val: number) =>
  ({
    type: inferLiteralFromString('inc'),
    payload: { val },
  })
