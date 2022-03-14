import "./App.css";
import { useState } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

export default function App(props) {
  const [burgerIngredients, setBurgerIng] = useState([]);
  const clearBurger = () => {
    setBurgerIng([]);
  };

  const addToBurger = (ingredient) => {
    let newBurgerList = burgerIngredients.slice();
    newBurgerList.push(ingredient);
    setBurgerIng(newBurgerList);
  };

  return (
    <>
      <h1>BurgerStacker</h1>
      <main>
        <IngredientList
          ingredients={props.ingredientsList}
          addToBurger={addToBurger}
        />
        <BurgerPane
          burgerIngredients={burgerIngredients}
          clearBurger={clearBurger}
          addToBurger={addToBurger}
        />
      </main>
    </>
  );
}
