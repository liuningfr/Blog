import fetch from '../utils/fetch';

// action types
const INIT_LIST = 'INIT_LIST';
const INIT_USER = 'INIT_USER';

const data = [
  {
    title: 'Title 1',
    des: 'Description 1',
  },
  {
    title: 'Title 2',
    des: 'Description 2',
  },
  {
    title: 'Title 3',
    des: 'Description 3',
  },
  {
    title: 'Title 4',
    des: 'Description 4',
  },
];

// reducer
export default (state = {
  list: [],
  name: '',
}, action) => {
  switch (action.type) {
    case INIT_LIST:
      // 初始化文章列表
      return { list: action.list };
    case INIT_USER:
      return { name: action.name };
    default:
      return state;
  }
};

// action creators
export const actions = {
  initList: async () => {
    const result = await fetch('/list');
    return ({ type: INIT_LIST, list: result });
  },
  initUser: () => ({ type: INIT_USER, name: '刘宁Leo' }),
};
