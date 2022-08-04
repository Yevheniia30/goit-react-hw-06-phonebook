import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { App } from 'App';
import './index.css';

const reducer = (state = {}, action) => state;
// const store = configureStore(reducer);
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
