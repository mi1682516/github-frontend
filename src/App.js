import React from 'react';
import * as Router from 'react-router-dom';
import store from './redux/configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist'
import { persistStore } from 'reduxjs-toolkit-persist'


function Home(){
  return (
    <div className="Home">
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  )
}

function Test(){
  return (
    <h2>Test</h2> 
  )
}

function App() {
  return (
    <div className="App">
            <Router.Routes>
              <Router.Route
                path="/"
                element={<Home />}
              />
              <Router.Route 
                path="/test"
                element={<Test />}
              />
            </Router.Routes>
    </div>
  )
}

export default App;
