import React from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'


export default class App extends React.Component {
  render(){
    return(
      <div className="todo">
       
        <IngredientsList />
        <BurgerPane />
      </div>
    )
  }

}