import React, {Component} from 'react'
import Ingredients from "./Ingredients"

export default class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return <Ingredients
            name={ingredient.name}
            key={index}
            />
        })
        return(
            <div>
                <button onClick={() => this.props.incrementCounter()}>increment counter</button>
                This is where the list of add-able ingredients will live.
                {ingredients}
            </div>
        )
    }
}