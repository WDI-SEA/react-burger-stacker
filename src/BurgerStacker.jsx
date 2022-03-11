import { Component } from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

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

class BurgerStacker extends Component {
	state = {
		ingredientsList: ingredients,
		addedIngredients: [] 
	}

	clickHandler = (e) => {
		const name = e.target.innerText
		console.log('Thisss: ' + name)
		this.setState({
			addedIngredients: [name, ...this.state.addedIngredients]
		})
	}

	render() {
		return (
			<div className='main-wrapper'>
				<h1>hello from burger stacker main</h1>
				<div className="main-wrapper-comp">
					<IngredientList ingredienstList={this.state.ingredientsList} addIngredientsHandler={this.clickHandler}/>
					<BurgerPane addedIngredients={this.state.addedIngredients} />
				</div>
			</div>
			)
	}
}

export default BurgerStacker;
