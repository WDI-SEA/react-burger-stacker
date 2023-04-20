import React, { Component } from 'react'
import Ingredient from "./Ingredient"

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((ingredient, i )=> {
            return <Ingredient 
            key={i}
            item={ingredient}
            handleAddIngredient={this.props.handleAddIngredient}
            />
        })
        return (
            <>
            <h2>Ingredient List</h2>
            <form onSubmit={this.props.handleAddOne}>
                    <label htmlFor="ingredInput">
                        Add a new ingredient:
                    </label>
                    <input 
                        type="text"
                        id="ingredInput"
                        placeholder="add a new ingredient to the list"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            {listToRender}
            </>
        )
    }



}
