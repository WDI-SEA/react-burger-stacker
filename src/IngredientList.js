import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
           return <Ingredient 
                item={item}
                i={i}
                key={"ingred"+i}
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

// import { Component } from 'react'


// export default class IngredientList extends Component {
//   render(){
//     let ingredientList = this.props.ingredients.map((ingredient,i) => {
//         return <div style={{background: ingredient.color}} key={`ingredient${i}`} onClick={() => this.props.handleAdd(ingredient.name)}>{ingredient.name}</div>
//     })
//     return(
//       <>
//         <h1>Ingredients</h1>
//         {ingredientList}
        
//       </>
//     )
//   }
// }