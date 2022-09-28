import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
        return (
            <div>
                <BurgerStack burgerArray={props.burgerArray} />
                <ClearBurger handleBurgerClear={props.handleBurgerClear} />
            </div>
        )
    }
export default BurgerPane