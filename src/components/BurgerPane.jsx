import Ingredient from './Ingredient';
import ClearBtn from './ClearBtn.jsx';



const BurgerPane = ({burgerPaneIngredients, clearBurger, isStacked}) => {
    console.log(burgerPaneIngredients)
    const burgerStack = burgerPaneIngredients.map((ingredient, idx) => {
        return (
            <Ingredient 
                ingredient={ingredient}
                key={idx}
                isStacked={isStacked}
            />
        )
    })
    return(
        <div className='main-container'>
            {
                burgerStack.length < 1 ? null :
                <div className='container'>
                    {burgerStack}
                    <ClearBtn 
                        type="submit" 
                        value="Clear Burger!"
                        clearBurger={clearBurger} 
                    />
                </div>
                }
        </div>
    )
}

 
export default BurgerPane;