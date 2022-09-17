import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login"


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/rank" component={Rank} /> */}
      </Switch>
    </Router>

  );
}

export default App;
