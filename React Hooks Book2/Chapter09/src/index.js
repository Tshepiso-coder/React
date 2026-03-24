import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const UserContext = React.createContext();

const username = 'Tshepiso ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Example 1: */}
    {/* <App username={username} /> */}

    {/* Example 2: */}
    {/* <UserContext.Provider value={username}> 
      <App />
      </UserContext.Provider> */}

    <App/> 
    
  </React.StrictMode>,
);


