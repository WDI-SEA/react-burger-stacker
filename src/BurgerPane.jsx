import { Component } from "react"
import IngredientList from "./IngredientList"

export default class BurgerPane extends Component {
    render() {
        const ingNames = this.props.ingNames.map((ingredientlist, index) => {
            return <IngredientList
                name={ingredientlist.name}
                key={index}
                />
        })
        return (
            <div>
                <h2>{this.props.name}</h2>

                <p>{this.props.color}</p>

                {ingNames}
            </div>
        )
    }
}