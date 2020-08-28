import React from "react";
import BurgerStack from "./BurgerStack";
import ClearBurger from "./ClearBurger";

function BurgerPane(props){
    return(
        <div className="burgerPaneDiv">
            <BurgerStack stack={props.stack} />
            <ClearBurger clear={props.clear}/>
        </div>
    )
}

export default BurgerPane;