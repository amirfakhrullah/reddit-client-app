import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './app/store';
import { Provider } from 'react-redux';

import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Loader type='ThreeDots' color='#FF5700' height='100' width='100' />
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
