import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        const burgerStack = this.props.burger.map((ingredient, i) => {
            return (
                <div key={`burg${i}`}>
                    <Ingredient
                        name={ingredient.name}
                        color={ingredient.color}    
                    />
                </div>
            )
        })
        return (
            <div>
                <h2>Borger</h2>

                <button onClick={this.props.undoIngredient}>Undo</button>
                
                <div className='burger-stack'>
                    {burgerStack}
                </div>

                <button
                    onClick={this.props.clearBurger}
                >
                    Clear Stack
                </button>
            </div>
        )
    }
}