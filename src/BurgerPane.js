import React, { Component } from "react";
import BurgerStack from "./BurgerStack";

class BurgerPane extends Component {
    
    render(){
        
        return(
            <div>
                <ul><BurgerStack ingredientArray={this.props.ingredientArray}/></ul>
                <button onClick={this.props.clearBurger}>Clear Burger</button>
            </div>
        )
    }
}

export default BurgerPane;