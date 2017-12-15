import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './dev/reducers/index'
import App from './dev/components/app'

const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);