import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
      <h1>Burger Stacker</h1>
      <p>{JSON.stringify(props)}</p>
    </>
  );
}

export default App;
