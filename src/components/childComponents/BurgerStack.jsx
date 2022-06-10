import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
  render() {
    const { burgerStack } = this.props

    const burger = burgerStack.map(ingredient => {
      const { name, color } = ingredient
      return <Ingredients name={name} color={color} />
    })

    return <div>{burger}</div>
  }
}
