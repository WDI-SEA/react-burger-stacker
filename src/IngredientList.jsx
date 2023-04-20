import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    ingredientsArray = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ]

      render() {
        const ingredients = this.ingredientsArray.map((item, i) => (
          <Ingredient
            key={`item + ${i}`}
            item={item.name}
            color={item.color}
            onAddIngredient={this.props.onAddIngredient}
          />
        ))
        return (
            <div style={{border: 'solid 2px blue'}} >
                <h1>Ingredient List</h1>
                {ingredients}
            </div>
        )
    }
}