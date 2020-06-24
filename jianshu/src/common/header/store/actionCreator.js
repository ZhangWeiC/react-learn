import { actionTypes } from './index'
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const changeList = value => ({
  type: actionTypes.GET_LIST,
  value: fromJS(value)
}) 

export const getList = () => {
  return async (dispatch) => {
    let res = await axios.get('/api/headerList.json')
    let { data } = res
    if(data.err_no) {
      console.log('error')
      return 
    }

    dispatch(changeList(data.list))
  }
}