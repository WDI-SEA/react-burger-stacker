import React, { Component } from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() { 
        const ingredientList = this.props.ingredients.map((ingredient, index) => {
            return <p key={`ingredientitem-${index}`}>{ingredient.name}</p>
        })
        return (
            <>
                <div className='border'> 
                    <h1>Burger Pane</h1>
                    <h4>Burger Stacking Area</h4>
                    <BurgerStack ingredientList={ingredientList}/>
                    <ClearBurger />
                </div>
            </>
        );
    }
}
 
export default BurgerPane;