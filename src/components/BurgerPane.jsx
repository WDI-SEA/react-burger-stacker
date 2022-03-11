import React, { Component } from 'react'
import Ingredient from './Ingredient';

class BurgerPane extends Component {
     
    render() {
        let burgerStack = this.props.burgerPaneIngredients.map((ingredient, idx) => {
            return <Ingredient ingredient={ingredient} key={idx} isStacked={this.props.isStacked}/>
        })
        return (
            <div className='main-container'>
                    {
                        burgerStack.length < 1 ? null :
                        <div className='container'>
                            {burgerStack}
                            <input 
                                type="submit" 
                                value="Clear Burger!"
                                onClick={this.props.clearBurger} 
                            />
                        </div>
                    }
            </div>
        );
    }
}
 
export default BurgerPane;