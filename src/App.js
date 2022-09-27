import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

export default class App extends Component {
  render(){
    return(
      <div>
        Burger Stacker Application
        <IngredientList />

        <BurgerPane />

      </div>
    )
  }
}