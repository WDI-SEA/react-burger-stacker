import React, { Component } from "react";
import BurgerPane from "./BurgerPane";
import Ingredient from './Ingredient';


class IngredientList extends Component {
    addIngredient=(e)=>{
        console.log(e.name);
        <BurgerPane ingredient={e} />
    }
    render(){
        let listIngredient=this.props.ingredientArray.map((ingredient)=>(
            <div id="Ingredients">
                <Ingredient name={ingredient.name} color={ingredient.color} />
                <button onClick={(e)=>this.addIngredient(ingredient)}>></button>
            </div>
        ));

        return <ul>{listIngredient}</ul>
    }
}

export default IngredientList;