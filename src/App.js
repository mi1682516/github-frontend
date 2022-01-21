import React from 'react';
import * as Router from 'react-router-dom';

function Home(){
  return (
    <h2>Home</h2>
  )
}

function test(){
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
  );
}

export default App;
