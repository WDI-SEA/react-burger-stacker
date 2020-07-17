import React, { useState } from "react";
import ClearBurger from "./ClearBurger";
import BurgerStack from "./BurgerStack";

const BurgerPane = (props) => {
    return (
        <div className="burger-pane">
            <BurgerStack ingredients={props.ingredients} />
            <ClearBurger ingredients={props.clearBurger}/>
        </div>
    )
}

export default BurgerPane;