import React from "react"
import './App.css'

// function bColor(b) { return {b.color}}

const BurgerPane = (props) => {
    let burg = props.toppins.map((item) => {
        return (
            // let bColor = {item.color}
            // {console.log({item.name})
                <div style={{backgroundColor: 'green' }} className={'toppin'} value={item.color}>

                    {item}
                </div> 
            )
            })   
    return (
        <div className="burgerPane">
            <h1>BUILD A BURG!!!</h1>
            {burg}
        </div>
    );
         
    


}


export default BurgerPane