
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

import Index from "views/Index.js";

import CodeOfConductDetails from "views/detailedviews/CodeOfConductDetails";
import ExploreDetails from "views/detailedviews/ExploreDetails";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" render={(props) => <Index {...props} />} />
        <Route exact path="/code-of-conduct" render={(props) => <CodeOfConductDetails {...props} />} />
        <Route exact path="/explore" render={(props) => <ExploreDetails {...props} />}/>
        <Redirect to="/" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
