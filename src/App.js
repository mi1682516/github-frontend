import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <div className="App">
          <h2>Hello</h2>
        </div>
      </PersistGate>
    </Provider>
  )
  
}

export default App;
