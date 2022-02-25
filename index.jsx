import React from "react";
import reactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
