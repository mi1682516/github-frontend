import React from 'react';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';
import * as counter from './redux/reducers/counter'

function Home(){
  return (
    <h2>Home</h2>
  )
}

function App() {
  console.log(
    counter
  )

  return (
    <div className="App">
      <Router.Routes>
        <Router.Route 
	  path="/"
	  element={
            <Home />
	  }
        />
      </Router.Routes>
    </div>
  )
  
}

export default App;
