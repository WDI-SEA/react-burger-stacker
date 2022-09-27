import React, {Component} from 'react';
import BurgerIngredients from './BurgerIngredients';
export default class BurgerStack extends Component {
  render(){
    const burgerIngredients = this.props.burgerIngredients.map((ingredient,i)=> {
        return(
            <div>
            <BurgerIngredients 
            ingredient={ingredient}/>
            </div>
        )
    })
    return(
      <div className="reverse-column">
        {burgerIngredients}
      </div>
    )
  }
}