import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {    
    render() {
        const list = this.props.ingredients.map((item, idx) => {
            return (
                <li key={`ingredient${idx}`} style={{backgroundColor: `${item.color}`}}>
                    <Ingredient 
                    item={item}                
                    />
                    <button onClick={() => this.props.handleAddIn(item.name,item.color)}>➡️</button> 
                </li>
            )
        })
        return (
            <ul>
            {list}
            </ul>
        )
    }
}