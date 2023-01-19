import React from 'react'
import Ingredients from './Ingredients'



export default class BurgerStack extends React.Component {
  render(){
    const stackToRender = this.props.stack.map((item, i) => {
      return <Ingredients
          item={item}
          i={i}
          key={`ingredient-${i}`}
      />
  })
    return(
      <div>
        {stackToRender}
      </div>
    )
  }

}