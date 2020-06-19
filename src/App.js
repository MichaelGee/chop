import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Feeds from "./pages/feeds";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={Home} path='/' exact='true' />
          <Route component={Login} path='/login' exact='true' />
          <Route component={Signup} path='/signup' exact='true' />
          <Route component={Feeds} path='/feeds' exact='true' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
