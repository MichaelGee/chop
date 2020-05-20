import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Feeds from "./components/Feeds/feeds";

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
