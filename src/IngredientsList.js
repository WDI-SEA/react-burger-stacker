import { Component } from 'react'
import Ingredients from './Ingredients'
//import Input from './Input'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredients 
                item={item}
                i={i}
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