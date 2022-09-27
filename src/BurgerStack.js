import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {
      const ingredientsComponents = this.props.clickedIngredients.map((item, i ) => {
        return (
          <Ingredients
            ingredient={item}
            key={`burgerlist-ingredients${i}`}
          />
        )
      })
        return (
            <div>
                {ingredientsComponents}
            </div>
        )
    }
}