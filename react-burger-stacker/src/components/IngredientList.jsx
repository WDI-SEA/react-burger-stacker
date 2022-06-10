import React, { Component } from 'react'
import Ingredient from './Ingredients'

class IngredientList extends Component {
    render(){
        const listRender = this.props.items.map((item, i) => {
            return <Ingredient 
                item={item}
                i={i}
                handleAdd = {this.props.handleAdd}
            />

        })
        return(
            <>
            <h2>Ingredient List </h2>
            {listRender}
            </>
        )
    }
}

export default IngredientList