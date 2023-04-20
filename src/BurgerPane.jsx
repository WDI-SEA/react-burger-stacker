import React, { Component } from 'react'
import BurgerStack from './BurgerStack'


export default class BurgerPane extends Component{
  
  handleClearBurger = () => {
    this.props.handleClearBurger()
  }
  
  render() {

    const burger = this.props.burger

    return(
      <div>

        <div>
            <BurgerStack burger={burger}/>
        </div>

        <div>
          <button className='clear-button' onClick={this.handleClearBurger}>ClearBurger</button>
        </div>

      </div>
    )
  }
}