import React, { Component } from "react";
import Ingredient from "./Ingredient";



class BurgerStack extends Component {
    


    render(){
        let listIngredient=this.props.burgerArray.map((burger)=>(
            <div id="Ingredients">
                <Ingredient name={burger.name} color={burger.color} />
            </div>
        ));
        return( 
            {listIngredient}
        )
        
    }
    
}

export default BurgerStack;