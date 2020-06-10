import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_DATA,
} from "./actionTypes";
import axios from "axios";

export const getHandleInputChange = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getHandleButtonClick = () => ({
  type: ADD_TODO_ITEM
})

export const getHandleDeleteItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getInitListData = (data) => ({
  type: INIT_LIST_DATA,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const action = getInitListData(res.data)
      dispatch(action)
    })
  }
}