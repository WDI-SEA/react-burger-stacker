import React, { Component } from 'react'
import BurgerStack from './childComponents/BurgerStack'

export default class BurgerPane extends Component {
  render() {
    const { burgerStack, clearBurger } = this.props
    return (
      <div>
        <h1>Your Burger</h1>
        <div className='burgerStackFlex'>
          <BurgerStack burgerStack={burgerStack} />
          <button className='clearBtn' onClick={clearBurger}>
            Clear Burger
          </button>
        </div>
      </div>
    )
  }
}
