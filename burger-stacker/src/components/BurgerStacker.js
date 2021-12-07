import React from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'
import { useState } from 'react'


export default function BurgerStacker(){

    // state = {
    //     ingredients: [
            
    //             {name: 'Kaiser Bun', color: 'saddlebrown'},
    //             {name: 'Sesame Bun', color: 'sandybrown'},
    //             {name: 'Gluten Free Bun', color: 'peru'},
    //             {name: 'Lettuce Wrap', color: 'olivedrab'},
    //             {name: 'Beef Patty', color: '#3F250B'},
    //             {name: 'Soy Patty', color: '#3F250B'},
    //             {name: 'Black Bean Patty', color: '#3F250B'},
    //             {name: 'Chicken Patty', color: 'burlywood'},
    //             {name: 'Lettuce', color: 'lawngreen'},
    //             {name: 'Tomato', color: 'tomato'},
    //             {name: 'Bacon', color: 'maroon'},
    //             {name: 'Onion', color: 'lightyellow'}
              
    //     ], 
    //     burgerIngredients:[ {name: 'Onion', color: 'lightyellow'}]
    // }
    //add to stack functionality

    const [Ingredients, setIngredients] = useState([
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
                {name: 'Onion', color: 'lightyellow'}
              
        ])

        const [burgerIngredients, setBurgerIngredients] = useState([])
    const addToStack = (e) => {
        
        console.log('this is what was clicked' ,e.target)
        // console.log('trying to get bGround color', e.target.style.backgroundColor)
        // console.log('trying to get name', e.target.innerText)
        let ingColor =e.target.style.backgroundColor
        let ingName = e.target.innerText
        // this.setState({
        //                           //this is what we add each time//   //this is what's already in the pane//
        //     burgerIngredients: [{name: ingName, color: ingColor}, ...this.state.burgerIngredients]
        // }) 
        setBurgerIngredients([{name: ingName, color: ingColor}, ...burgerIngredients])
    
    }

    const removeFromStack = (e) => {
        console.log('old stack', burgerIngredients );
        let newBurgerIngArr = burgerIngredients.filter(ing => ing.name != e.target.innerText)
        console.log('new stack', newBurgerIngArr)
        // this.setState({
        //     burgerIngredients:newBurgerIngArr
        // })
        setBurgerIngredients(newBurgerIngArr)
    }

    const clearBurger = (e) => {
        // this.setState({
        //     burgerIngredients: []
        // })
        setBurgerIngredients([])
    }

    
        return ( 
            <main>
                <h1>BurgerStacker</h1>
                <div className='panes'>
                    
                    <IngredientsList 
                    ingredients={Ingredients} 
                    add={addToStack}
                    />
                    <BurgerPane 
                    ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear= {clearBurger} 
                    />
                </div>
            </main>
        )
    
}
