import React, { useState } from "react";
import BurgerIngredients from "./BurgerIngredients";

const BurgerStack = (props) => {
  return (
    <div>
      {props.ingredients.map((ingredient, i) => {
        return (
          <p style={{color: `${ingredient.color}`}}>
            <BurgerIngredients key={i} ingredient={ingredient} />
          </p>
        );
      })}
    </div>
  );
};
export default BurgerStack;
