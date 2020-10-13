import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landind from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landind} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
