import React, {Component} from 'react'
import BurgerIng from './BurgerIng';

export default class BurgerStack extends Component {
    render() {
        const burger = this.props.burgerArray.map((ingredient, index, arr) => {
            return ( 
                <BurgerIng
                    isTop = {index === 0? true : false}  
                    isBottom = {index === arr.length - 1? true : false}
                    checkBun={this.props.checkBun}
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