import React, {Component} from 'react';
import Ingredients from '../Ingredients/Ingredients'
import BurgerStack from '../Burger/BurgerStack';

class IngredientsList extends Component {

    state = {
        ingredientsArray: this.props.ingredients,
    }

    addIngredient = e => {
        console.log(e)

        let addIngredient=this.state.addIngredient;
        this.setState({
            addIngredient: this.state.ingredientAdd
        })
    }

    toBurger = e => {
        this.setState({
            addIngredient: this.state.ingredientAdd
        })
    }

    render() {

        let ingredientsList = this.state.ingredientsArray.map( (item, index) => (
            <>
            <Ingredients ingredients={item} key={index} />
            <input hidden type="text" name="ingredientAdd" value={this.state.ingredientAdd}></input>
            <button onClick={(e) => this.addIngredient(e)}>+</button>
            </>
        ))

        return (
            <div>
                <h1>Ingredients</h1>
                <ul>{ingredientsList}</ul>
                <h1>Burger</h1>
                {/* <ul>{burgerList}</ul> */}
            </div>
        )
    }
}

export default IngredientsList