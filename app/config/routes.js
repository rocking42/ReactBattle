import React from "react";
const ReactRouter= require("react-router");
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Main} from "../components/Main";
import {Home} from "../components/Home";
import {About} from "../components/About";

export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
    </Route>
  </Router>
)
