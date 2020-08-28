import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import IngredientList from "./Components/IngredientList";
import { render } from "@testing-library/react";

const App = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients)

  const [burgerIngredients, setBurgerIngredients] = useState([])

  let addIngredient = (e) => {
    let newBurgerIngredients = burgerIngredients;
    burgerIngredients.unshift(e.target.value)
    setBurgerIngredients(newBurgerIngredients)
    console.log(burgerIngredients)
  }
  
  return (
    <div>
      <IngredientList ingredients={ingredients} onClick={addIngredient}/>
    </div>
  );
};

export default App;
