import React from 'react';
import './App.css';
import Ingredients from './Ingredients'

function App() {
  let ingredientsList = [
    {name: "Plain Bun", color: 'saddlebrown'}, 
    {name: "Sesame Bun", color: 'sandybrown'},
    {name: "Whole Wheat Bun", color: 'brown'}, 
    {name: "Beef Patty", color: '#3F250B'},
    {name: "Veggie Patty", color: '#3F250B'},
    {name: "Lettuce", color: 'lawngreen'},
    {name: "Ketchup", color: 'red'}, 
    {name: "Mustard", color: 'yellow'},
    {name: "Tomato", color: 'tomato'},
    {name: "Bacon", color: 'maroon'},
    {name: "Onion", color: 'lightyellow'},
    {name: "Pickles", color: 'green'},
    {name: "Special Sauce", color: 'orange'}
  ]

  return (
    <div className="App">
      <Ingredients ingredientsList={ingredientsList} />
    </div>
  );
}

export default App;
