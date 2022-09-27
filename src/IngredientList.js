import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {

    const listToAdd = this.props.items.map((item, i) => {
        return <Ingredients
        i={i}
        item={item}
        handleAdd={this.props.handleAdd}
        />
    })

    render() {
        return (
            <>
            <h1>Ingredients Here</h1>
            {listToAdd}
            </>
        )
    }

}