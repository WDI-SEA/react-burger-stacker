import React from "react";
import BurgerStack from "./BurgerStack";
import ClearBurger from './ClearBurger';

export default function BurgerPane(props) {
  console.log(`from burger pane this is the props ing ${props.ingredients}`)
  return (
    <div className={'made'}>
      <span>🍔🥬🍅🥓🧅🍔</span>
      <BurgerStack ingredients={props.ingredients} />
      <ClearBurger action={props.action}/>
    </div>
  );
}