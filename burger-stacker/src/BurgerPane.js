import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack burgerIngredients={props.burgerIngredients}  />
            <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BurgerPane