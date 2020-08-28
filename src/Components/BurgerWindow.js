import React, { useState } from "react";
import BurgerStack from "./BurgerStack";
import ClearBurger from './ClearBurger'
const BurgerWindow = (props) => {
  return (
    <div className='BurgerHolder'>
      <h1>Here's your burger ya prick.</h1>
      <BurgerStack ingredients={props.ingredients} />
      <ClearBurger action={props.action} />
    </div>
  );
};

export default BurgerWindow;
