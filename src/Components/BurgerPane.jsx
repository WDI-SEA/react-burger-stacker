import React, {Component} from 'react'
import IngredientList from './IngredientList'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render() {
      const stackToRender = this.props.stack.map((item, i) => {
        return <Ingredient 
          item={item}
          key={"stack"+i}
        />
      })

      return(
        <>
          <h2>BurgerPane</h2>
          {stackToRender.reverse()}
          <button
            onClick={this.props.handleRemoveFromStack}
          >
            Clear
          </button>
        </>
      )
    }
  }