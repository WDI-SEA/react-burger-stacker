import {Component} from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import ingredients from './ingredients'

export default class App extends Component {
  state = {
    burgerStackIngredients: []
  }
  addIngredient = (e) => {
    // console.log(`${e.target.name} added`)
    const newStackIngredients = this.state.burgerStackIngredients
    ingredients.forEach((el,idx) => {
      if(el.name === `${e.target.name}`) {
        // newStackIngredients.push(el)
        newStackIngredients.splice(0,0,el)
      }
    })
    this.setState({
      burgerStackIngredients: newStackIngredients
    }/* , ()=>console.log(this.state) */)
  }
  clearBurger = () => {
    // console.log('cleared burger')
    this.setState({
      burgerStackIngredients: []
    })
  }
  render() {
    return(
      <section>
        <h1>App/BurgerStacker</h1>
        <div className='row'>
          <IngredientList ingredients={ingredients} addIngredient={this.addIngredient}/>
          <BurgerPane ingredients={this.state.burgerStackIngredients} clearBurger={this.clearBurger}/>
        </div>
      </section>
    )
  }
}

