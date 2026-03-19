//Summary- Claude.ai
// This is a standard React application entry point (index.js). Here's a summary:
// Imports

// React and ReactDOM — core React libraries for building and rendering UI
// index.css — global stylesheet
// App — the root application component
// reportWebVitals — a performance measurement utility (imported but unused here)

// What it does

// Selects the <div id="root"> element from the HTML as the mount point
// Creates a React root using the modern ReactDOM.createRoot() API (React 18+)
// Renders the <App /> component inside a React Fragment (<>...</>) into that root

// In short, it bootstraps the React app by mounting the App component into the DOM.
// ===========================


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
