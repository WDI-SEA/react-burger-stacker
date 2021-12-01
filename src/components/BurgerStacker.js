import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import Ingredients from './Ingredient'
import IngredientList from './IngredientList'

export default class BurgerStacker extends Component {
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
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
          ],
          burgerIngredients: []
    }

    // add to stack function
    addToStack = (e) => {
        console.log('this was clicked\n', e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        this.setState({
            burgerIngredients: [{name: ingName, color: ingColor}, ...this.state.burgerIngredients]
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        clear={this.clearBurger}
                    />
                </div>
            </main>
        )
    }
}