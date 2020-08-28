import React from "react";
import App from "./App";
import IngredientButton from "./IngredientButton";

function IngredientList(props) {
  const newList = props.ingredients.map((i, k) => {
    return <IngredientButton onClick={props.onClick} name={i.name} color={i.color}/>;
  });
  return (
    <div>
      <ul className={'ing-display'}>
        <h1>choose from:</h1>
          {newList}
      </ul>
    </div>
  );
}


export default IngredientList;