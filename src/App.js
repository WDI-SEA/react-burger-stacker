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
        const ingredient = ingredientArray.find(({name}) => {
            return (name === e.target.innerText);
        });
        this.setState(prevState => {
            return {
                burgerArray: [ingredient, ...prevState.burgerArray]
            }
        });
    }
    handleBurgerClear = () => {
        this.setState({burgerArray: []});
    }
    render() {
        return (
            <div className="flex items-end gap-4">
                <IngredientList 
                    ingredientArray={ingredientArray}
                    handleIngredientClick={this.handleIngredientClick}
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
