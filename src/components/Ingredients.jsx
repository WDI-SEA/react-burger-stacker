import React, { Component } from 'react'
import Ingredient from './Ingredient.jsx'

export default class Ingredients extends Component {
    render() {

        const renderIngredients = this.props.allIngredients.map((ingred,i)=>{
            return (
                <Ingredient 
                    key = {`ingredient${i}`} 
                    ingred = {ingred} 
                    handleAddIngredientClick = {this.props.handleAddIngredientClick} 
                    isBurgerPane = {this.props.isBurgerPane} 
                />
            )
        })
    
        return (
            <>
                <div>Ingredients:</div>
                <div>{renderIngredients}</div>
                
            </>
        )
    }
}
