import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {
    // state --> holds ingredients
    state = {
        ingredients: [
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
          ],
          burgerIngredients: []
    }
    //add to stack function
    addToStack = (e) => {
        //console.log("e", e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        this.setState({
            burgerIngredients: [{name: ingName, color: ingColor}, ...this.state.burgerIngredients]
        })
    }

    //clear burger stack function

    render () {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    < IngredientList 
                        ingredients={this.state.ingredients} 
                        add={this.addToStack} 
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients} 
                    />
                </div>
            </main>
        )
    }
}