import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import { daysReducer } from './store/daysSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    days: daysReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);