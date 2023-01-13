import {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render () {

        const masterList = this.props.ingreds.map((ingred, i) => {
            return (
            <Ingredient 
                ingred={ingred} 
                key={`ingred${i}`}
                handleAddIngred={this.props.handleAddIngred}

            />
            )
        })


        return (
            <>
                <h2>Ingredient List</h2>

                {masterList}
            </>
        )
    }
}