import React, { useState } from "react";
import "./App.css";
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

function App() {
  const [ingredients, setIngredients] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]);
  const [chosenIngredients, setChosenIngredients] = useState([]);

  let addIngredient = (e, ingredients) => {
    e.preventDefault();
    console.log(ingredients);
    setChosenIngredients([ingredients, ...chosenIngredients]);
  };

  let clearBurger = () => {
    setChosenIngredients([]);
  };
  console.log(ingredients);
  // addIngredient = (e, )
  return (
    <div className="burger-body">
      <div className="ingredients">
        <IngredientList
          ingredients={ingredients}
          addIngredient={addIngredient}
        />
      </div>

      <div className="burge-stack">
        <BurgerPane
          chosenIngredients={chosenIngredients}
          clearBurger={clearBurger}
        />
      </div>
    </div>
  );
}

export default App;
