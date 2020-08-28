import React from 'react'
// import Ingredients from "./Ingredients"

function BurgerStack (props)  {
    let buildABurger = props.burger.map((burger, i) => {
        return <li key={i} style={{listStyle: 'none'}}> {burger} </li>
    })

    return (
        <div className="burgerStack">
            <h5> Burger Stack</h5>
            <ol>
                {buildABurger.reverse()}
            </ol>
        </div>
    )
} 


export default BurgerStack 