import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false,
  list: [],
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('isFocus', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('isFocus', false)
    case actionTypes.GET_LIST:
      return state.set('list', action.value)
    default: 
      return state
  }
}