import React, { Component } from "react"
//build and import BurgerPane
import BurgerPane from "./BurgerPane"
//build and import IngredientList
import IngredientList from "./IngredientList"

export default class BurgerStacker extends Component {
    //state --> holds ingredient
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
    //add to stack function(maybe passed to child?)
    addToStack = (e) => {
        console.log('this is what was clicked:', e.target)
        let color = e.target.style.backgroundColor
        let name = e.target.innerText
        this.setState({
            burgerIngredients: [{name: name, color: color}, ...this.state.burgerIngredients]
        })
    }

    removeFromStack = (e) => {
        let newBurgIngArr = this.state.burgerIngredients.filter(ing => ing.name !== e.target.innerText)
        this.setState({
            burgerIngredients: newBurgIngArr
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }
    //clear burger stack function(maybe passed to child?)

    render() {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <IngredientList
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    <BurgerPane
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeFromStack}
                        clear={this.clearBurger}
                    />
                </div>
            </main>
        )
    }
}