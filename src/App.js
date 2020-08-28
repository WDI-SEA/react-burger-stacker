import React, { useState } from 'react';
import './App.css';
import BurgerBuilder from "./components/BurgerBuilder";
import BurgerVisualizer from "./components/BurgerVisualizer";

const App = (props) => {
    const [ingredients] = useState([
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
    ])

    let [burgerStack, setBurgerStack] = useState([])

    const addIngredient = (e) => {
        let newBurgerItem = [e.target.value]
        let finalstack = newBurgerItem.concat(burgerStack)
        setBurgerStack(finalstack)
    }

    const clearIngredients = () => {
        setBurgerStack([])
    }

    return (
      <div className="container">
          <img src="https://officialpsds.com/imageview/7l/1p/7l1p2l_large.png?1521316467" alt="Burger King Spoof Logo"/>
        <div className="burgerShop">
          <BurgerBuilder ingredients={ingredients} addIngredient={addIngredient} />
          <BurgerVisualizer ingredients={burgerStack} clearIngredients={clearIngredients} />
        </div>
      </div>
    );

}

export default App;
