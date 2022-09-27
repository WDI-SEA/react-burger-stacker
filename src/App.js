import React, { Component } from "react";
import IngredientList from "./IngredientList";
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
        burgerArray: []
    }
    handleIngredientClick = e => {
        this.setState(prevState => {
            return {
                burgerArray: [e.target.innerText, ...prevState.burgerArray]
            }
        });
    }
    handleBurgerClear = () => {
        this.setState({burgerArray: []});
    }
    render() {
        const ingredients = ingredientArray.map((ingredient, index) => {
            return (
                <IngredientList 
                    ingredient={ingredient.name}
                    color={ingredient.color}
                    key={`ingredient-${index}`}
                    handleIngredientClick={this.handleIngredientClick}
                />
            );
        })
        return (
            <div className="flex items-end gap-4">
                <div className="w-fit">
                    {ingredients}
                </div>
                <div>
                    <BurgerContainer 
                        burgerArray={this.state.burgerArray} 
                        handleBurgerClear={this.handleBurgerClear}
                    />
                </div>
            </div>
        );
    }
}

export default App;
