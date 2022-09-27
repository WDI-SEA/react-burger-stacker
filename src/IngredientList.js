import React, {Component} from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render() {
        return (
            <div>
                <h1>This is the list of Ingredients</h1>
                <Ingredients />
            </div>
        )
    }
}