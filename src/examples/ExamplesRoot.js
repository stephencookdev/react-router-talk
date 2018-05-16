import React from "react";
import { Route } from "react-router";
import Example1 from "./Example1";
import Example2 from "./Example2";

export default () => (
  <React.Fragment>
    <Route path="/examples/example1" component={Example1} />
    <Route path="/examples/example2" component={Example2} />
  </React.Fragment>
);
