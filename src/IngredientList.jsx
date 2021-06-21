import { Component } from 'react'
import Ingredients from './Ingredients'


export default class IngredientList extends Component {
    render() {
        return (
        <div> 
            <h1>Name: {this.props.name}</h1>
        </div>
        )
    }
}