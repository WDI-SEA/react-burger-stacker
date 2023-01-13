import React,{Component} from "react"
export default class Ingredient extends Component{
    render(){
        return(
            <div 
            key={`ingredintList${this.props.idx}`}
            style={{backgroundColor: `${this.props.ingredient.color}`}} 
            onClick={()=>this.props.handleClick(this.props.ingredient)}
            >
            <p>{this.props.ingredient.name}</p>

            </div>
        )
    }
}