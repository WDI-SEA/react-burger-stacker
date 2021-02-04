import React, { Component } from 'react';
import Ingredients from './Ingredients';
import Burger from './Burger';

class BurgerStack extends Component {
  render() {
    return (
      <>
        {
          this.props.burger.map((burgerPart, index) => {
            return (
              <Ingredients ingredient={burgerPart}/>
            )
            })

        }
  </>)
}
}


export default BurgerStack;