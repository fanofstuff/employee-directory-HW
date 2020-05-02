import React from 'react';
import EmployeeDirectory from './containers/EmployeeDirectory';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={EmployeeDirectory}/>
    </Router>
  );
}

export default App;
