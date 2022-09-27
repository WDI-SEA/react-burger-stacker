import React, {Component} from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render() {
        const burgerIng = this.props.ingredients.map((bing, i) => {
            return <Ingredients key={`toppingKey${i}`} ingredient={bing.name} color={bing.color} />
        })
        return (
            <div>
                <h1>This is the list of Ingredients</h1>
                {burgerIng}
            </div>
        )
    }
}