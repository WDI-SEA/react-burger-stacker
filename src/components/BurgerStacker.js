import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
// build and import BurgerPane
// build and import IngredientList

export default class BurgerStacker extends Component {
    // state --> holds ingredients
    state = { 
        ingredientsOfThings: [
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
            {name: 'Cheese', color: 'gold'},
            {name: 'Onion', color: 'lightyellow'}
        ],
        burgerIngredients: [

        ]
    }

    // add to stack function(maybe passed to child)
    addToStack = (e) => {
        console.log('this is what was clicked: ',e.target);
        let ingColor  = e.target.style.backgroundColor
        let ingName = e.target.innerText
        
        this.setState({
            burgerIngredients: [
                {name: ingName, color: ingColor}, 
                ...this.state.burgerIngredients]
        })
    }

    // remove ingredients from burger stack
    // kinda buggy, removes all ingredients of same name clicked, should just remove one ingredient per click
    // TODO: make it so one ingredient is removed per click
    removeFromStack = (e) => {
        console.log('old stack', this.state.burgerIngredients);
        let newBurgerIngArr = this.state.burgerIngredients.filter(ingrs =>  ingrs.name != e.target.innerText)
        console.log('new stack', newBurgerIngArr);
        this.setState({
            burgerIngredients: newBurgerIngArr
        })
    }

    // clear burger stack function(maybe passed to child?)
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <IngredientList 
                        ingredients = {this.state.ingredientsOfThings}
                        add={this.addToStack}
                    />
                    <BurgerPane 
                        ingredients = {this.state.burgerIngredients}
                        clear = {this.clearBurger}
                        removeIngr = {this.removeFromStack}
                    />
                </div>
            </main>
        )
    }
} 