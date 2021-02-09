import React, { Component } from 'react';
import Ingredient from './Ingredient';

class BurgerStack extends Component {
  render () {
    let bits = this.props.burgerBits.map(bit => {
      return <li><Ingredient ingredient={bit} /></li>
    })
    return (
      <div>
        <ul className='burger-stack'>
          {bits}
        </ul>
      </div>
      
    )
  }
};

export default BurgerStack; 

