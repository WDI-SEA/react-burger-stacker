import {Component} from "react"
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    
    constructor(props){
        super()
        this.state = {
          clickedIngredients: []

        }
      }
    addIngredient = (e) => {
        console.log(e.target.innerText)
        let tempIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
        let tempArray = this.state.clickedIngredients    
        tempArray.push(tempIngredient)   
        this.setState({
            clickedIngredients:tempArray
        })
        console.log(tempArray)
        }

    clearBurger = () => {
        
        this.setState({
            clickedIngredients: []
        })
        console.log(tempArray)
    }
    



    render() {
    
        let ingredientComponents = this.props.ingredients.map(item => (
            <li onClick={this.addIngredient}>
                <Ingredient ingredients={item.name} color={item.color} addIngredient={this.addIngredient}/>
            </li>
        ))
    
        return(
            
            <ul>
                {ingredientComponents}

            </ul>
            
            

        )
    }
}
