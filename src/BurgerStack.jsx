import Ingredient from "./Ingredient";



function BurgerStack(props) {
   
    const ingredientComponents = props.clickedIngredients.map((item, i) => {
      return (
        <Ingredient 
        ingredient={item} key={`burger-list-${i}`}/>
      )
    })
  
    return (
      <div class='burger-stack'>
        {ingredientComponents}
      </div>
    )
  }

export default BurgerStack;