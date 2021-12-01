import React, { Component } from 'react'
import './index.css';


export default class IngredientList extends Component {
    state = {
        ingredientsToChoose: this.props.ingredients
    }
    render() {
        const allIngredients = this.props.ingredients.map((f,i) => {
            return (
                <div>
                    <li className="ingList" key={i}>{f.name}</li>
                    <button className="addIng">add</button>
                </div>
            )
        })
        return(
            <div>
                <ul>
                    {allIngredients}
                </ul>
            </div>
        )
    }
}
