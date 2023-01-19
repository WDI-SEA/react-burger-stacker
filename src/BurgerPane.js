import React from 'react'
import BurgerStack from './BurgerStack'
import Ingredients from './Ingredients'
//import ClearBurger from './ClearBurger'




export default class BurgerPane extends React.Component {
  //create a function
  
  

  render(){
    const stackToRender = this.props.stack.map((item, i) => {
      return <Ingredients

         
          
      />

    })
    return(
      <div>
        <h1>BurgerPlane/stalking area</h1>
       <BurgerStack
       stack={this.props.stack}
      
       
       />
       
      </div>
    )
  }

}