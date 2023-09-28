import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { SETTINGS } from './components/app/app-settings';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...SETTINGS}></App>
  </React.StrictMode>
);
