import React from "react";
import reactDom from "react-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* menerapkan styling yang ada pada file css */}
      <h1 className="title">Hello world</h1>
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
