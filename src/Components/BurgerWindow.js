import React, { useState } from "react";
import BurgerStack from "./BurgerStack";

const BurgerWindow = (props) => {
  return (
    <div className='BurgerHolder'>
      <h1>Here's your burger ya prick.</h1>
      <BurgerStack ingredients={props.ingredients} />
    </div>
  );
};

export default BurgerWindow;
