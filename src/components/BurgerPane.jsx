import React, { Component } from 'react'

class BurgerPane extends Component {
     
    render() {
        let burgerStack = this.props.burgerPaneIngredients.map((ingredient, idx) => {
            return <p>{ingredient.name}</p>
        })
        return (
            <div>
                {burgerStack}
            </div>
        );
    }
}
 
export default BurgerPane;