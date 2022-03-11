import React, { Component } from 'react'
import Ingredient from './Ingredient';
import ClearBtn from './ClearBtn.jsx';

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
                            <ClearBtn 
                                type="submit" 
                                value="Clear Burger!"
                                clearBurger={this.props.clearBurger} 
                            />
                        </div>
                    }
            </div>
        );
    }
}
 
export default BurgerPane;