import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    return (
        <div>
            <BurgerStack ingredients={props.ingredients} />
            <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BurgerPane