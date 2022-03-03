import React from "react";
import reactDom from "react-dom";
import Logo from "./assets/logo.png";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* menerapkan styling yang ada pada file css */}
      <h1 className="title">Hello world</h1>
      {/* menambahkan gambar */}
      <img src={Logo} alt="logo-react" />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
