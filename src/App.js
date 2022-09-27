import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

export default class App extends Component {
  render(){
    return(
      <div className="center">
        <h1>Burger Stacker Application</h1>
        <container className="App">
          <IngredientList />
          <BurgerPane />
        </container>

      </div>
    )
  }
}