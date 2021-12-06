import React, { useState } from "react";
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";
//build and impoort BurgerPane
// build and import IngredientList

const BurgerStacker = () => {
    //state --- holds ingredients

    // state = {
    //     ingredients: [
    //         {name: 'Kaiser Bun', color: 'saddlebrown'},
    //         {name: 'Sesame Bun', color: 'sandybrown'},
    //         {name: 'Gluten Free Bun', color: 'peru'},
    //         {name: 'Lettuce Wrap', color: 'olivedrab'},
    //         {name: 'Beef Patty', color: '#3F250B'},
    //         {name: 'Soy Patty', color: '#3F250B'},
    //         {name: 'Black Bean Patty', color: '#3F250B'},
    //         {name: 'Chicken Patty', color: 'burlywood'},
    //         {name: 'Lettuce', color: 'lawngreen'},
    //         {name: 'Tomato', color: 'tomato'},
    //         {name: 'Bacon', color: 'maroon'},
    //         {name: 'Onion', color: 'lightyellow'},
    //         {name: 'Cheese', color: 'gold'}
    //       ],
    //     burgerIngredients: []
    // }

    // add to stack function(maybe passed to child?)

    const [ingredients] = useState( [
                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Lettuce Wrap', color: 'olivedrab'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'gold'}
              ])
    const [burgerIngredients, addIngredient] = useState([])

   const addToStack = (e) => {
        let ingColor= e.target.style.backgroundColor
        let ingName = e.target.innerText
        addIngredient({
            burgerIngredients: [{name: ingName, color: ingColor}, ...burgerIngredients]
        })
      
    }
    // clear burger stack function (maybe passed to child?)

    const clearBurger = () =>{
        addIngredient({burgerIngredients: []})
    }

    return (
        <main>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList ingredients={ingredients} 
                add={addToStack} 
                
                />
                <BurgerPane ingredients={burgerIngredients}
                clear={clearBurger}
                />
            </div>
        </main>
    )
    }


export default BurgerStacker