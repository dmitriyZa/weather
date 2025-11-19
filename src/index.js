import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppRoot } from '@telegram-apps/telegram-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoot>
    <App />
    </AppRoot>
  </React.StrictMode>
);


