import './App.css';
import ClearBurger from './ClearBurger';
import BurgerStack from './BurgerStack';

function Burgers (props) {
  
    return (
        <>
      <div class='burgers' >
        <BurgerStack 
            clickedIngredients={props.clickedIngredients}/>
      </div>
      <ClearBurger handleBurgerClear={props.handleBurgerClear}/>
      </>
    )
  }


export default Burgers;