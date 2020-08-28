import React, { useState } from "react";
import BurgerStack from "./BurgerStack";
import ClearBurger from './ClearBurger'



const BurgerPane = (props) => {
  return (
    <div className>
      <h2>🍔 Here's your buuuurgeeer: 🍔</h2>
      <BurgerStack ingredients={props.ingredients} />
      <ClearBurger action={props.action} />
    </div>
  );
};

export default BurgerPane;