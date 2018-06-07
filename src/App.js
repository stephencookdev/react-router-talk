import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Presentation from "./Presentation";

export default () => (
  <HashRouter>
    <React.Fragment>
      <Route path="/([0-9]+/[0-9]+)?" exact component={Presentation} />
    </React.Fragment>
  </HashRouter>
);
