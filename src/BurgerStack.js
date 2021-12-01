import { Component } from 'react';
import './App.css';

export default class BurgerStack extends Component {
    render(){
        const burgerIngredients = this.props.ingredients.map((ingredient, i) => {
            return ( <div style={{backgroundColor: ingredient.color}}>
                <li key={i} >{ingredient.name}</li>
            </div>)
        })
        return (
            <div className="burgerStack">
                    <h3>Your Burger</h3>
            <ul>{burgerIngredients}</ul>
            </div>
        )
    }
}