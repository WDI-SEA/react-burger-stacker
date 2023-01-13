import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'




export default class BurgerPane extends React.Component {
  render(){
    return(
      <div>
        <h1>BurgerPlane</h1>
       <BurgerStack/>
       <ClearBurger/>
      </div>
    )
  }

}