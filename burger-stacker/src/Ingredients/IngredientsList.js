import React, {Component} from 'react';
import Ingredients from '../Ingredients/Ingredients'

class IngredientsList extends Component {

    state = {
        ingredientsArray: this.props.ingredients
    }

    addIngredient = e => {
        e.preventDefault()
        let burgerList=this.state.ingredientsArray
        let addIngredient=this.state.addIngredient
        this.setState({
            burgerList: burgerList.push(addIngredient),
            addIngredient: ''
        })
    }

    toBurger = e => {
        this.setState({
            addIngredient: e.target.value
        })
    }

    render() {

        let ingredientsList = this.state.ingredientsArray.map( (item, index) => (
            <>
            <Ingredients doThis={item} key={index} />
            {/* <button onClick={() => this.toBurger()}>+</button> */}
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