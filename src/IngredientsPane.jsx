import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsPane extends Component {
    state={
        name: "",
        color: ""
    }

    handleTextChange=(e)=>{

        this.setState({
          [e.target.name] : e.target.value
        })
    
      }

    render() { 
        const ingredientsList = this.props.ingredients.map((elem, idx)=>{
            return <Ingredient handleClick={()=>{this.props.handleClick(elem)}} key={`ingredient-${idx}`} ingredientName={elem.name} ingredientColor={elem.color} />
        })
        return (
        <div className='panes'>
            <h1>Ingredients:</h1>
            {ingredientsList}
                <label htmlFor="Add-new-ingredient">Add new Ingredient:</label>
                <br></br>
                <input required 
                type="text" 
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
                placeholder="Ingredient name"/>
                <input required 
                type="text" 
                placeholder="Ingredient color"
                name="color"
                value={this.state.color}
                onChange={this.handleTextChange}/>
                <input type="submit"onClick={()=>(this.props.handleAddIngredent(this.state.name, this.state.color))} />
        </div>
        );
    }
}
 
export default IngredientsPane;