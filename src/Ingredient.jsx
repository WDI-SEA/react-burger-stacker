import { Component } from "react";

// class Ingredient extends Component {

//   render() {
//     return (
      // <div>
      //   <h4 className="h4-ingredient"
      //     onClick={() => {this.props.addIngredientsHandler(this.props.ingredient)}}
      //     style={{ backgroundColor: `${this.props.ingredient.color}` }}
      //   >{this.props.ingredient.name}</h4>
      //   {/* <p>{this.props.color}</p> */}
      //   {/* <p>{this.props.ingredienstList.color}</p> */}
      // </div>
//       )
//   }
// }


const Ingredient = ({ ingredient, key, addIngredientsHandler }) => {
  return (
    <div>
    <h4 className="h4-ingredient"
      onClick={() => {addIngredientsHandler(ingredient)}}
      style={{ backgroundColor: `${ingredient.color}` }}
    >{ingredient.name}</h4>
    {/* <p>{this.props.color}</p> */}
    {/* <p>{this.props.ingredienstList.color}</p> */}
  </div>
  )
}

export default Ingredient