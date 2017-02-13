import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Main} from "../components/Main";
import {Home} from "../components/Home2";

export const Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
    </Route>
  </Router>
)
