import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';


let ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]



const App = () => {
  let [ingredientStack, setIngredientStack] = useState([])
  const ingredientsClick = (index) => {
    let ingredient = ingredients[index]
    console.log("Index", index)
    ingredientStack.push(ingredient)
  }

  return (
    
    <div className="App">
    <IngredientList ingredients={ingredients} ingredientsClick={ingredientsClick}/>
    <BurgerPane />
    </div>
    
    
  );
}

export default App;
