import React, { Component } from "react";
import IngredientContainer from "./IngredientContainer";
import BurgerContainer from "./BurgerContainer";

const ingredientArray = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
]

class App extends Component {
    state = {
        ingredientArray: ingredientArray,
        burgerArray: []
    }
    handleIngredientClick = e => {
        const ingredient = this.state.ingredientArray.find(({name}) => {
            return (name === e.target.innerText);
        });
        this.setState(prevState => {
            return {
                burgerArray: [ingredient, ...prevState.burgerArray]
            }
        });
    }
    handleAddIngredient = e => {
        e.preventDefault();
        const newIngredient = {
            // the input value from the form is on the first index of target
            name: e.target[0].value,
            color: "antiquewhite"
        }
        this.setState(prevState => {
            return {
                ingredientArray: [...prevState.ingredientArray, newIngredient]
            };
        })
    }
    handleBurgerClear = () => {
        this.setState({burgerArray: []});
    }
    render() {
        return (
            <div className="flex items-end gap-4">
                <IngredientContainer 
                    ingredientArray={this.state.ingredientArray}
                    handleIngredientClick={this.handleIngredientClick}
                    handleAddIngredient={this.handleAddIngredient}
                />
                <BurgerContainer 
                    burgerArray={this.state.burgerArray} 
                    handleBurgerClear={this.handleBurgerClear} 
                />
            </div>
        );
    }
}

export default App;
