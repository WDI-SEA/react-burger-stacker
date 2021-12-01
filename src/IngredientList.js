import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    state = {
        ingredientStuff: this.props.ingredientsBook,
        burgerStuff: this.props.burgerBuild,
        newBurgerItem: ""
    }

    addIngredientToBurger = (e) => {
        e.preventDefault()
        let newBurgerArray = this.state.burgerStuff
        newBurgerArray.push(this.state.newBurgerItem)

        this.setState({
            newBurgerItem: "",
            burgerStuff: newBurgerArray
        })
    }
    render() {
        
        return(
            <div className="container">
                Ingredients List:
                <Ingredients ingredientsToShow = {this.state.ingredientStuff}/>

            </div>
        )

    }
}