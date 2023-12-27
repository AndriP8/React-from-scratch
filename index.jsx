import React from 'react';
import reactDom from 'react-dom/client';
import Logo from './assets/logo.png';
import './index.css';

const App = () => {
  return (
    <div>
      <h1 className="title">Hello world</h1>
      <img src={Logo} alt="logo-react" />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<App />);
