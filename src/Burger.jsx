import React, {Component} from 'react'
import Ingredients from './Ingredients'
 
export default class Buger extends Component {
    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return <Ingredients
            name={ingredient.name}
            key={index}
            />
        })
        return(
            <div>
                This is the actual burger
                {ingredients}
            </div>
        )
    }
}