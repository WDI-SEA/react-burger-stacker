import React, { Component } from "react";
import Ingredient from "./Ingredient";



class BurgerStack extends Component {
    

    render(){
        let listIngredient=this.props.ingredientArray.map((ingredient,index)=>(
            
            
               <li> <Ingredient name={ingredient.name} color={ingredient.color} key={index}/></li>
            
        ));
        
        return( 
            <>
            {listIngredient}
            </>
            
        )
        
    }
    
}

export default BurgerStack;