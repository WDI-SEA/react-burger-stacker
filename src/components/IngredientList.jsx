import { Component } from "react";
import Ingredients from "./Ingredients";


export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredients 
                item={item}
                key={i}
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