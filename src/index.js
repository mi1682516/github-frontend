import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import * as Router from 'react-router-dom'
import store from './redux/configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist'
import { persistStore } from 'reduxjs-toolkit-persist'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>   
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
