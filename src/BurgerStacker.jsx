import { Component } from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';
import { useState } from 'react';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

// class BurgerStacker extends Component {
// 	state = {
// 		ingredientsList: ingredients,
// 		addedIngredients: [] 
// 	}

	// clickHandler = (ingredient) => {
	// 	let newBurgerList = this.state.addedIngredients
	// 	newBurgerList.unshift(ingredient)
	// 	this.setState({...newBurgerList.addedIngredients, newBurgerList})
	// }

	// trashPlate = () => {
	// 	console.log('clean')
	// 	this.setState({
	// 		addedIngredients: []
	// 	})
	// }

// 	render() {
// 		return (
			// <div className='main-wrapper'>
			// 	<h1 className='main-header'>hello from burger stacker main</h1>
			// 	<div className="main-wrapper-comp">
			// 		<IngredientList ingredienstList={this.state.ingredientsList} addIngredientsHandler={this.clickHandler}/>
			// 		<BurgerPane trashPlate={this.trashPlate} addedIngredients={this.state.addedIngredients} ingredienstList={this.state.ingredientsList}/>
			// 	</div>
			// </div>
// 			)
// 	}
// }

const BurgerStacker = () => {

	const [ingred, setIngredient] = useState({
		ingredientsList: ingredients,
		addedIngredients: []
	})

	const trashPlate = () => {
		console.log('clean')
		setIngredient({
			addedIngredients: []
		})
	}

	const clickHandler = (ingredient) => {
		let newBurgerList = ingred.addedIngredients
		newBurgerList.unshift(ingredient)
		let changeList = {...newBurgerList.addedIngredients, newBurgerList}
		setIngredient(changeList)
	}

	return (
		<div className='main-wrapper'>
		<h1 className='main-header'>hello from burger stacker main</h1>
		<div className="main-wrapper-comp">
			<IngredientList ingredienstList={ingred.ingredientsList} addIngredientsHandler={clickHandler}/>
			<BurgerPane trashPlate={trashPlate} addedIngredients={ingred.addedIngredients} ingredienstList={ingred.ingredientsList}/>
		</div>
	</div>
	)
}

export default BurgerStacker;
