import React from "react";

export default function IngredientButton(props) {
  return <button className="ing-btn" value={props.name} style={{backgroundColor: `${props.color}`}}
                 onClick={(e) => props.onClick(e)}>{props.name}</button>;
}
