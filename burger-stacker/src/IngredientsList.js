import React, {Component} from 'react'
import List from './List'

export default class IngredientsList extends Component {
state ={
    ingredients: this.props.ingredients,
    myBurger: 'hello'
}
clearList= ()=>{
    this.setState({
      myBurger: ''
    })
  }
addIngredient = (e)=>{
    e.preventDefault()
    console.log('trying to add')
    const newBurger= this.state.myBurger
    newBurger.push(e.target.value)
    this.setState({
        myBurger:newBurger
    })
}

    render(){
        return (
            <div className='allSide'>
                <div className="leftSide">
                    <List ingredients = {this.state.ingredients} onClick={this.state.addIngredient} />
                </div>

                <div className="rightSide">
                    <h1>Your Order: </h1>
                    <h1 name="myBurger" value={this.state.myBurger}>{this.state.myBurger}</h1>
                    <button onClick={this.clearList}>Clear</button>
                </div>
            </div>
        )
    }
}