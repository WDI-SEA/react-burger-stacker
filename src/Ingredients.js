import React, { Component } from 'react'

export default class Ingredients extends Component {
    state = {
        burgerBuild:[],
        newBurgerItem: ""
    }
    addIngredientToBurger = (e) => {
        e.preventDefault()
        let newBurgerArray = this.state.burgerBuild
        newBurgerArray.push(this.state.newBurgerItem)

        this.setState({
            newBurgerItem: "",
            burgerStuff: newBurgerArray
        })
    }
    render() {

        const ingredientsArray = this.props.ingredientsToShow.map((food, index) => {
            return <li key={index}>{food.name}
            <br />
            <button onClick={(e) => this.addIngredientToBurger(e)}>Add to Burger</button>
            </li>
            
        })

        return(
            <ul>
                {ingredientsArray}
            </ul>

        )
    }
}
