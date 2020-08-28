import React from "react";
import BurgerStack from "./BurgerStack";


export default function BurgerPane(props) {
  console.log(`from burger pane this is the props ing ${props.ingredients}`)
  return (
    <div className={'made'}>
      <span>🍔🥬🍅🥓🧅🍔</span>
      <BurgerStack ingredients={props.ingredients} />
    </div>
  );
}