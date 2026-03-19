import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ===========================
// Summary from Claude.ai
// This is a standard **React 18 application entry point** (`index.js`). Here's what it does:

// 1. **Imports** — Brings in React, ReactDOM, global CSS styles, the root `App` component, 
// and a web vitals reporter.

// 2. **Creates the root** — Uses `ReactDOM.createRoot()` (React 18's concurrent mode API) to 
// attach the React app to the `<div id="root">` element in the HTML file.

// 3. **Renders the app** — Mounts the `<App />` component inside `<React.StrictMode>`,
// which enables extra development-time warnings and checks (like detecting deprecated APIs or side effects).

// 4. **`reportWebVitals`** — A utility (not called here, but imported) typically used to
// measure performance metrics like load time and interactivity.

// In short, this file bootstraps the React app and renders it into the browser DOM.
// ===============================