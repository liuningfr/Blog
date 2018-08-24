import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from './containers/Index'
import blogReducer from './reducers/blog'
import './index.css'

const store = createStore(blogReducer);

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
