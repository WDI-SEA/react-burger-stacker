import React, { useState } from "react";

const ClearBurger = (props) => {
   return (
        <div>
            <button className="clearButton" onClick={(e) => props.action(e)}>Clean Your Plate</button>
        </div>
   )
}

export default ClearBurger;