import React, { useState } from "react";

const MyIngredients = (props) => {
    
        let stackedFoods = props.ingredients.map((item) => {
            let div = {
                background: item,
                color: "white"
            }
            return (<div className="stacked" style={div}>
                <h4>. . . . . . . . .</h4>
            </div>)
        })

    return(
        <h4>hello</h4>
    )
}

export default MyIngredients;