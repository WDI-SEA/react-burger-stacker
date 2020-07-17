import React from "react"
import './App.css'

// function bColor(b) { return {b.color}}

const BurgerPane = (props) => {
    let burg = props.toppins.map((item) => {
        return (
            // function bColor(b) {return b.color}
            // let bColor = {item.color}
            // {console.log({item.name})

                <div class="toppin" style={{backgroundColor: 'green'}} className={item.color} value={item.color}>
                    {/* <input type="button" value={item.name} /> */}
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