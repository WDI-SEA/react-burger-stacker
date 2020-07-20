import React from 'react'
import BurgerStack from './BurgerPane'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
  return (
    <div>
      <BurgerStack ingredients={props.ingredients}/>
      <ClearBurger action={props.action}/>
    </div>
  )
}

export default BurgerPane