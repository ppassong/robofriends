import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStroe, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import { legacy_createStore as createStore } from 'redux'


const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// const store = configureStore({
//   reducer: {
//     robots: searchRobots
//   }
//   })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  




// ReactDOM.render(<App stroe={store}/>, document.getElementById('root'));
