import React, { Component } from 'react';
import Ingredient from './Ingredient';

class BurgerPane extends Component {

state={

}
  render() {
     const ontheBurger = this.props.onBurger.map((element, idx)=>{
          return <Ingredient handleClick={()=>this.props.handleClick(element.name)} key={`ingredient-${idx}`} ingredientName={element.name} ingredientColor={element.color} />
      })
      

    return (
      <div className="panes">
        <h1>Build-a-Burger Below</h1>
        {ontheBurger}
        <hr></hr>
        <input onClick={()=>this.props.clearBurger()}type="submit" value="Clear the burger"></input>
      </div>
    );
  }
}

export default BurgerPane;
