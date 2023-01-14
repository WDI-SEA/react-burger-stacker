import { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, idx) => {
           return <Ingredients 
                item={item}
                idx={idx}
                key={"ingred"+idx}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return(
            <>
                <h2>Ingredient List</h2>
                {listToRender}
            </>
        )
    }
}