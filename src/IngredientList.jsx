import { Component } from 'react'
import Ingredients from './Ingredients'


export default class IngredientList extends Component {
    render() {
        console.log(this.props.name)
        return(
            <div>
            <h2>INGREDIENT LIST 🥬 🍅</h2>

            <p>ingredient name: {this.props.name} </p>

            </div>
        )
    }
}