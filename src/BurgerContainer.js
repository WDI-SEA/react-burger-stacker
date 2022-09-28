import BurgerStack from "./BurgerStack";
import BurgerClear from "./BurgerClear";

function BurgerContainer(props) {
    return (
        <div className="flex flex-col items-center">
            <BurgerStack burgerArray={props.burgerArray} />
            <BurgerClear handleBurgerClear={props.handleBurgerClear} />
        </div>
    );
}

export default BurgerContainer;
