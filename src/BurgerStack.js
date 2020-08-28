import React from "react";
import BurgerIngredients from "./BurgerIngredients";

export default function BurgerStack(props) {
  return (
    <div>
      {props.ingredients.map((ingredient, i) => {
        console.log(`ingredient from map in burgerstack.js ${ingredient}`)
        return (
          <p>
            <BurgerIngredients key={i} ingredient={ingredient} />
          </p>
        );
      })}
    </div>
  );
}