
import React from "react"
import './App.css'

// function bColor(b) { return {b.color}}

const BurgerPane = (props) => {
    let burg = props.toppins.map((item) => {
        return (
                <div className={item.color} value={item.color}>
                    {item}
                </div> 
            )
            })   
    return (
        <div className="burgerPane">
            <h1>BUILD A BURG!!!</h1>
            {burg}
            
            <input type="button" className="clearBtn" value="Start a new burg" onClick={(e) => props.action('blep')} />

            <style jsx>
                {/* {`
                    #${props.toppins.name} {
                        background-color: ${`green`};
                    }
                `} */}
            </style>
            
        </div>
    );


    


}


export default BurgerPane