import React, { Component } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

console.log('is this working')
export default class ListContainer extends Component {

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

          selectedIngredients: []
    }

    clearList = () => {
        console.log("clearing list")
        this.setState({
          selectedIngredients: []
        })
      }

    addIngredient = (e, ingredientName) => {
        e.preventDefault()
        let newSelectedIngredients = this.state.selectedIngredients
        newSelectedIngredients.unshift(ingredientName)
        this.setState({
            selectedIngredients: newSelectedIngredients
        })
    }

    render () {
        return (
            <div className='bothLists'>
                <IngredientList ingredients={this.state.ingredients} addIngredient={this.addIngredient} clearList={this.clearList} />
                <BurgerPane selectedIngredients={this.state.selectedIngredients} clearList={this.clearList} />
            </div>
        )
    }
}

