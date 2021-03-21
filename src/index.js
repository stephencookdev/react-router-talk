import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("mount"));
document.dispatchEvent(new Event("post-react-render"));
