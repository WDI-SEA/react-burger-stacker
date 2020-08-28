import React from "react";

function Ingredients(props){
    return(
        <div>
        <div className="ing" onClick={(e)=> props.stackBurger(e)}>{props.name}</div>
        </div>
    )
}

export default Ingredients;

