import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home';
import Main from './Components/Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>
);
