import React, { Component } from 'react';
import Clear from './Clear';
import Ingredient from './Ingredient';

class BurgerPane extends Component {    
    render() { 
        const burgerIngredients = this.props.burgerIngredients.map(layer => {
            return <Ingredient ingredientName={layer.name}/>
        })
        return (
            <>
            <section>
            <h3>Burger Pane</h3>            
            {burgerIngredients}
            <Clear clearBurgerPane={this.props.clearBurgerPane}/>
            </section>
            </>
        );
    }
} 
<>
</>
export default BurgerPane;