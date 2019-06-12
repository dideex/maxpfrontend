import { Action } from 'redux'

type InitAction = Action<'init'>
type ResetAction = Action<'reset'>
type IncAction = Action<'inc'>

export const init = (): InitAction => ({
  type: 'init',
})

export const reset = (): ResetAction => ({
  type: 'reset',
})

export const inc = (): IncAction => ({
  type: 'inc',
  // payload: { val },
})
