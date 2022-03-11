import React, { Component } from 'react';
import ClearBurger from './ClearBurger';
import Ingredients from './Ingredients';


class BurgerPane extends Component {
 

    render() { 
        const burgerIngredient = this.props.burgerIngredients.map((ingredient, idx)=>{
            return <Ingredients key={`burgerIng-${idx}`} ingredient={ingredient}/>
        })
        return (
            <section className='burger-pane'>
                <h1>Burger Pane</h1>
                
                {burgerIngredient}
                
                <ClearBurger clearBurger={this.props.clearBurger}/>
            </section>
        
        );
    }
}
 
export default BurgerPane