import React, { Component } from 'react'
import Ingredient from './Ingredient';

class BurgerPane extends Component {
     
    render() {
        let burgerStack = this.props.burgerPaneIngredients.map((ingredient, idx) => {
            return <Ingredient ingredient={ingredient} key={idx}/>
        })
        return (
            <div className='container'>
                {burgerStack}
                <input type="submit" />
            </div>
        );
    }
}
 
export default BurgerPane;