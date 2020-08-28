import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from "./IngredientList"
import BurgerPane from './BurgerPane'
import Ingredients from './Ingredients';


function App() {
 
 //starter data
 let ingredients =  [
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
  return(
    <>
  <BurgerPane />
  <IngredientList />
  </>
  )
}

export default App;
