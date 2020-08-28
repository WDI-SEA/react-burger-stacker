import React from "react";

export default function IngredientButton(props) {
  console.log(`${props.name} clicked`)
  return <button className="ing-btn" value={props.name} style={{backgroundColor: `${props.color}`}}
                 onClick={(e) => props.onClick(e)}>{props.name}</button>;
}
