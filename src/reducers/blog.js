// action types
const INIT_LIST = 'INIT_LIST'

// reducer
export default (state, action) => {
  if (!state) {
    state = { list: [] };
  }
  switch (action.type) {
    case INIT_LIST:
      // 初始化文章列表
      return { list: action.list };
    default:
      return state
  }
}

// action creators
export const initList = (list) => {
  return { type: INIT_LIST, list }
}
