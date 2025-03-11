import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'zustand';
import App from './components/App';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);