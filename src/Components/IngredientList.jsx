import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
  render() {
      const listToRender = this.props.items.map((item, i) => {
        return <Ingredient 
        item={item}
        i={i}
        key={'ingred'+i}

        />
      })

    return(
      <>
        <h2>Ingredient list</h2>
        {listToRender}
      </>
    )
  }
}