import { Component } from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

class BurgerStacker extends Component {
	render() {
		return (
			<div className='main-wrapper'>
				<h1>hello from burger stacker main</h1>
				<div className="main-wrapper-comp">
					<IngredientList />
					<BurgerPane />
				</div>
			</div>
			)
	}
}

export default BurgerStacker;
