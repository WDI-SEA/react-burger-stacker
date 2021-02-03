import React, { Component } from "react";
import Ingredient from './Ingredient';
import BurgerStack from './BurgerStack';


class IngredientList extends Component {
    

    render(){
        
        let listIngredient=this.props.ingredientArray.map((ingredient,index)=>(
            
            <li onClick={this.props.add}>
                <Ingredient name={ingredient.name} color={ingredient.color} key={index}/>
            </li>
        ));
        
       
        return (
            <div>
                <ul>{listIngredient}</ul>
                
            
            </div>
            
        )
    }
}

export default IngredientList;