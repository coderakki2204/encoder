import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <ToastProvider
     placement="top-center"
  >
  <App />
</ToastProvider>,
  document.getElementById('root')
);
