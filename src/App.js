import React from 'react';
import store from './redux/configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist'
import { persistStore } from 'reduxjs-toolkit-persist'


function Hello(){
  return (
    <h2>Hello</h2>
  )
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={
        persistStore(store)
      }>
        <Hello />
      </PersistGate>
    </Provider>
  )
  
}

export default App;
