import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login"
import Admin from "./pages/Admin"

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/login" component={Login} />
       <Route path="/" component={Admin} />
      </Switch>
    </Router>

  );
}

export default App;
