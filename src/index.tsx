import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment,
);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
