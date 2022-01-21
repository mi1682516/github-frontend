import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import * as Router from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router.BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>   
          <App />
        </PersistGate>
      </Provider>
    </Router.BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
