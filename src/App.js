import React, {Component} from 'react'
import ingredients from './ingredients'
import IngredientList from './IngredientList'
import AddIngredient from './AddIngredient'
import BurgerPane from './BurgerPane'
import './App.css'

export default class App extends Component{
 
  state ={

    addedIngredient: '',
    all: [],
    burger: []
  }



  allIngredient = ingredients.map((ingredient,ind) =>{
    this.state.all.push (
        <div key={`ingredient${ind}`} style={{'backgroundColor': ingredient.color}} onClick={()=>{this.getIngredient(ind)}}  >
            <p> {ingredient.name} </p>
        </div>
    ) 
  })

  all = this.allIngredient

  burgerIngredient = ingredients.filter((ingredient,ind) =>{
    return (
        <div key={`burger${ind}`} style={{'backgroundColor': ingredient.color}}  onClick={()=>{this.getIngredient(ingredient.name)}}  >
            <p> {ingredient.name} </p>
        </div>
    ) 
  })

  
  handleChange(e){
    e.preventDefault()

    let num = ingredients.length
    console.log(this)
      this.state.all.push(
        <div key={`addIngredient${num}`} style={{'backgroundColor': e.target.color.name}} onClick={()=>{this.getIngredient(num)}}  >
            <p> {e.target.ingredient.name} </p>
        </div>
      )
  }
   
  burgerArray = []
  count = 1 
  
  addIngredient =() =>{

  }
  getIngredient= (ind) =>{
     
    this.burgerArray.unshift(
      <div key={`addIngredient${this.count++}`} style={{'backgroundColor': ingredients[ind].color}} onClick={()=>{this.getIngredient(ind)}}  >
          <p> {ingredients[ind].name} </p>
      </div>
      )
      // console.log(this.burgerArray.reverse())
      
      this.setState({
        burger : this.burgerArray
      })
  }

  clearButton=()=>{
    this.burgerArray =[]
    this.setState({
      burger : []
    })
  }

  render(){

    

    return(

      <div>
        <div className='columnDisplay'>
          <IngredientList ingredients={this.state.all} state={this.state.choosenState}/> 
        </div>
        <div className='columnDisplay'>
          <BurgerPane selectedIngredients={this.state.burger}/>
          <button onClick={this.clearButton}> Clear Burger</button>
        </div>
        <div className='columnDisplay'>
          <AddIngredient addedIngredient={this.state.addedIngredient} getE={this.handleChange}/>
        </div>
      </div>  
    )
  }
}