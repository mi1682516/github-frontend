import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';



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
