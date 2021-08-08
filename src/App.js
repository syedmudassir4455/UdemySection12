import React, { Fragment } from "react";
import "./App.css";
import BackwardCounter from "./Components/BackwardCounter";
import ForwardCounter from "./Components/ForwardCounter";

function App() {
  return (
    <Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </Fragment>
  );
}

export default App;
