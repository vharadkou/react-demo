import React from 'react';
import './App.css';

import logo from './logo.svg';

import { Home } from './scenes/Home';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
    <Home />
  </div>
);
