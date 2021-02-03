import React, { Component } from "react";
import BurgerStack from "./BurgerStack";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
    state = {
        burgerArray: this.props.ingredient
    }

    clearBurger=()=>{
        this.setState({
            burgerArray: []
        })
    }

    addLayer = (e)=>{
        //e.preventDefault();
        let tempArray=this.state.burgerArray;
        tempArray.push(this.state.newItem);
        this.setState({
          burgerArray:tempArray,
          newItem: ''
        })
    }
    render(){
        
        return(
            <div>
                <BurgerStack burgerArray={this.state.burgerArray}/>
                <button onClick={(e)=>this.clearBurger(e)}>Clean Burger</button>
            </div>
        )
    }
}

export default BurgerPane;