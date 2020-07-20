import React from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'
// import IngredientList from './IngredientList';


function BurgerPane(props) {
    return (
        <div>
            <BurgerStack ingredients={props.ingredients} />
            <ClearBurger action={props.action} />
        </div>
    )
}


// const BurgerPane = props => {
    
//     return (
//         <div>
//             <h2>BurgerPane</h2>
//             <p> {props.ingredientsAdded} </p>
//             <input type="button" value="clear"></input>
//         </div>
//     )
// }

export default BurgerPane;