import React from 'react';

function Hello(){
  return (
    <h2>Hello</h2>
  )
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={}>
        <Hello />
      </PersistGate>
    </Provider>
  )
  
}

export default App;
