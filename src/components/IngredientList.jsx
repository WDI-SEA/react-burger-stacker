import React, { Component } from 'react'
import Ingredients from './childComponents/Ingredients'

export default class IngredientList extends Component {
  render() {
    const { ingredients, addIngredient } = this.props

    const allIngredients = ingredients.map(ingredient => {
      const { name, color } = ingredient
      return (
        <div key={name} onClick={() => addIngredient(ingredient)}>
          <Ingredients name={name} color={color} />
        </div>
      )
    })

    return (
      <div className='ingredFlex'>
        <h1>Ingredients List</h1>
        {allIngredients}
      </div>
    )
  }
}
