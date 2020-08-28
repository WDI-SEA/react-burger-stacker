import React from "react";

const BurgerIngredients = (props) => {
  return (
    <div style={{color: `${props.ingredient.color}`}}>
      {props.ingredient}
    </div>
  );
};

export default BurgerIngredients;
