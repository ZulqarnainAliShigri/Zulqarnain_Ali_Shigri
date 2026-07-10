import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Suppress noisy errors injected by browser extensions (not from this app).
// e.g. "A listener indicated an asynchronous response ... message channel closed"
const isExtensionNoise = (msg = '') =>
  msg.includes('message channel closed') ||
  msg.includes('listener indicated an asynchronous response') ||
  msg.includes('Extension context invalidated');

window.addEventListener(
  'unhandledrejection',
  (event) => {
    const msg = (event && event.reason && (event.reason.message || event.reason)) || '';
    if (isExtensionNoise(String(msg))) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

window.addEventListener(
  'error',
  (event) => {
    if (isExtensionNoise(String((event && event.message) || ''))) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);