import { Component } from "react";
import ClearBurger from "./ClearBurger";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
  

  // function that gets trigered by clear
  // pass this function to burgerPane then to Clear component state

  render() {
    const ingredientItemsEmptyArr = this.props.addedIngredients.map((ingredient, index) => {
      return <Ingredient ingredient={ingredient} key={`BurgerPane-${index}`} />
    })

    return (
      <div className="burgerpane-wrapper">
        <h2>BurgerPane</h2>  
        {ingredientItemsEmptyArr}
        <ClearBurger trashPlate={this.props.trashPlate}/>
      </div>
    )
  }
}

export default BurgerPane