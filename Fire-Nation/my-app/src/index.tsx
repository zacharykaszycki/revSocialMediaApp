import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Provider } from 'react-redux';
import allOfMyReducers from './redux/state-logic/Store';
//import { BrowserRouter } from 'react-router-dom';
//npm install bootstrap before using this
//import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, Store, compose } from "redux";
Amplify.configure(config);
// import st from './redux/state-logic/Store';

//LET'S CREATE THE STATE STORE (container)
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = createStore(allOfMyReducers, composeEnhancers());
    // {},
    // applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>      
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
