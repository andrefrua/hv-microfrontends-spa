import React from "react";
import { Route, Switch } from "react-router";
import People from "../../pages/People";
import Details from "../../pages/Details";
import NotFound from "../../pages/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={People} />
    <Route exact path="/:id" component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
