import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false,
  list: [],
})

export default (state=defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('isFocus', true)
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('isFocus', false)
  }
  if(action.type === actionTypes.GET_LIST) {
    return state.set('list', action.value)
  }
  return state
}