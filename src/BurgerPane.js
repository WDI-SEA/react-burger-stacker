import React from "react"
import './App.css'

// function bColor(b) { return {b.color}}

const BurgerPane = (props) => {
    let burg = props.toppins.map((item) => {
        return (
            // let bColor = {item.color}
                <div style={{backgroundColor: 'green'}}  class={item.name}>

                    {item}
                </div> 
            )
            })   
    return (
        <div className="burgerPane">
            <h1>BURGS</h1>
            <h1>BURGS</h1>
            <h1>BURGS</h1>
            {burg}
        </div>
    );
         
    


}


export default BurgerPane