import React, { Component } from 'react'



export default class BurgerStack extends Component {
    render() {
        const ingredients = this.props.pickedIngredients.map((ingredient, i) => {
            return <li key={`ingredient${i}`} style={{ backgroundColor: ingredient.color }}>{ingredient.name}</li>
        })
        return (
            <>
                <ul>
                    {ingredients}
                </ul>
            </>
        )
    }
}