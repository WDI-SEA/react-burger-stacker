import React from 'react'
import Ingredients from './Ingredients'



export default class BurgerStack extends React.Component {
  render(){
    return(
      <div>
        <h1>BurgerStack</h1>
       <Ingredients/>
      </div>
    )
  }

}