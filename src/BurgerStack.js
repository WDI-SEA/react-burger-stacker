import React, {Component} from 'react'
import BurgerIng from './BurgerIng';

export default class BurgerStack extends Component {
    render() {
        const burger = this.props.burgerArray.map((ingredient, index) => {
            return (
                <BurgerIng
                    ingredientName={ingredient.name}
                    ingredientColor={ingredient.color}
                    key={`ingredientKey${index}`}
                />
            )
        })
        return (
            <div>
                {burger}
            </div>
        );
    }
}