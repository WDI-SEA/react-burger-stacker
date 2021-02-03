import React, { Component } from 'react';
import Ingredient from './Ingredient';

class BurgerStack extends Component {
  constructor(props){
    super()
  
  }
  render () {
    let yummyBurger = this.props.burger.map((item, index) => {
      return (
        <p key={index} > new burger ingredient {item} </p>
      )
    })
    return (
      <div>
       {yummyBurger}
      
      </div>
    )
  }
};

export default BurgerStack;