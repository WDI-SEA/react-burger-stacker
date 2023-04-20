import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

const ingredients = this.props.ingredients

export default class BurgerPane extends Component{
  render() {
    return(
      <div>

        <div>
            <BurgerStack ingredients={ingredients}/>
        </div>

        <div>
          <button>ClearBurger</button>
        </div>

      </div>
    )
  }
}