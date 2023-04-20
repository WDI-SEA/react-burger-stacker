import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurgerButton from './ClearBurgerButton'

class BurgerPane extends Component {
    render() {
      return (
        <div>
          <h2>Burger Stack</h2>
          <BurgerStack />
          <ClearBurgerButton />
        </div>
      );
    }
  }

export default BurgerPane