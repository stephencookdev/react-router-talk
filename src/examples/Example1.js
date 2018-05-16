import React from "react";
import { Route, Link } from "react-router-dom";
import FakeBrowser from "../misc/FakeBrowser";

export default () => (
  <FakeBrowser>
    {"Hello"}
    <Link to="/examples/example1/foo">{"foo"}</Link>
    <Link to="/examples/example1/">{"no foo"}</Link>
    <Route path="/examples/example1/foo" render={() => <div>{"foo!"}</div>} />
  </FakeBrowser>
);
