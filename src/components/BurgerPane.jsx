import React, { Component } from 'react'
import Burger  from './Burger'

export default class BurgerPane extends Component {
  render() {
    return (
      <div>
            <h2>Your Burger</h2>
            <Burger burger={this.props.burger} />
            <button
            onClick={this.props.handleClear}
            >
                Clear Burger
            </button>
      </div>
    )
  }
}
