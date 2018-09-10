import React from "react";
import ReactDOM from "react-dom";

import Register from "./Register/Register";

const App = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("index"));
