const defaultState = {
  isFocus: false
}

export default (state=defaultState, action) => {
  if(action.type === 'focus_search') {
    return {
      isFocus: true
    }
  }
  if(action.type === 'blur_search') {
    return {
      isFocus: false
    }
  }
  return state
}