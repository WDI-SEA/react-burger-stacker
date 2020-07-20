import React, { useState } from "react"

const BurgerArea = (props) => {
    const [ingredientsAdded, setIngredientsAdded ] = useState([])



    const addToBurger = (e) => {
     
        let result = e.target.id
              setIngredientsAdded([ result, ...ingredientsAdded  ])
    }
    
    const resetBurger = (e) => {
        setIngredientsAdded([])
    }

    let list = props.burgerSeed.map((item) => {
        return (
            <ul>
                <li>
                    {item.name}
                    <input id={item.name} type="button" value="add" onClick={(e) => { addToBurger(e) }} />
                </li>
            </ul>
        )
    })
    let burger = ingredientsAdded.map((item) => {
        return (
            <div className= "le-burg">
                <ul>
                    <li>
                        {item}
                    </li>
                </ul>
            </div>
        )
    })
    return (
        <div >
            <div className="film-list-filters">
                <div className={`ingredients-list-filter`}>
                    <h1>Ingredients</h1>
                    {list}
                </div>
            </div>
            <div >
                <div className={`burger-builder`}>
                    <h1>Burger Area</h1>
                </div>
                <div className={`ingredients-list-filter`}>
                    {burger}
                    <input type="button" value="clear" onClick={(e) => { resetBurger(e) }} />
                </div>
                
            </div>

        </div>
    )
}


export default BurgerArea;