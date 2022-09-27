import React,{Component} from 'react'

export default class addIngredient extends Component{

    render(){
        return (
            <div>
                <label> Ingredient : </label>
                <p></p>
                <form onClick={this.props.getE}>
                <input type='text' name='ingredient' ></input>
                <p></p>
                <label> color : </label>
                <p></p>
                <input type='text' name='color' ></input>
                <p></p>
                <div>
                    <button > Add Ingredient</button>
                </div>
                </form>
                
            </div>
        )
    }
}