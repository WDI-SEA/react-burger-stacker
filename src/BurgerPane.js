import ClearBurger from './ClearBurger'
import BurgerStack from './BurgerStack'

export default function BurgerPane(props) {
        return (
            <div>
                <BurgerStack 
                    clickedIngredients={props.clickedIngredients}
                />

                <ClearBurger 
                    handleBurgerClear={props.handleBurgerClear}
                />
            </div>
        )
    
}