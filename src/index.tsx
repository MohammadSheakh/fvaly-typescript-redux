import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

//import 'bootstrap/dist/css/bootstrap.min.css'; // ei ta amader ekhon ar dorkar nai ..
// karon eita amra override kore main er moddhe shob kichu ek shathe korsi .. 
// ekhane shudhu main ta re import korlei hobe .. 

import "./scss/main.scss"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
