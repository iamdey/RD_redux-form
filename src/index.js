import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store/configure-store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({}, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
