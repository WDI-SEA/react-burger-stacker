import React, { useState } from "react"


const Ingredient = (props) => {
    return (


        <div>
            <h1>Hi</h1>

            <style jsx>
            {`
                h1 {
                    background-color: blue
                }
            `}
        </style>
        <style jsx>
            {`
                #${props.ingredient} {
                    background-color: ${props.ingredient.color}
                }
            `}
        </style>
        </div>

    )



const [ingredients, setIngredients] = useState(burgerSeed)
const [BurgerPaneIngredients, setBurgerPaneIngredients] = useState([])


function addToStack(e) {
    let result = e.target.innerText
    setBurgerPaneIngredients([result, ...BurgerPaneIngredients])
}





}
    
export default Ingredient;