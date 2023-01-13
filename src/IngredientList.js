import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {


    render() {

       

        const allIngredients = this.props.ingredients.map((ingredient, i) => {
            return <Ingredient key={`ingredient${i}`} ingredient={ingredient} handleClick={this.props.handleClick}/>
        })


        return (
            <div style={{border:"1px solid black", height: "730px", padding:'40px', 'paddingTop': 0, flex:'1'}}>
                <p style={{'fontSize': '30px', 'textAlign':'center'}}>ingrdeintes:</p>
                {allIngredients}
            </div>
        )
    }
}