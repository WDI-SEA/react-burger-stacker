import React, { Component } from 'react';

import Ingredient from './Ingredient'


export default class Burger extends Component {
    render() {

        
        const  burgerItems = this.props.burgerIngredients.map((item, index) => {
            return (
                <Ingredient key={index} name={item.name} onClick={this.props.onClick}

                />
            )
        })
        return (
           <div>
               {burgerItems}
           </div>
        )
    }
}
