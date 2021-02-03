import React, { Component } from 'react';
import BurgerStack from './BurgerStack';

class Ingredients extends Component {
    // constructor(props){
    //     super(props)
        // this.state = {
        //     ingToDisplay: props.ingredients,
        //     burger: [],
        //     newIngredient:''
        // }
        // this.handleClick = this.handleClick.bind()
    // }
    // handleClick(e){
    //     console.log(e.target.value)
    //     let ingredient = e.target.value
    //     this.setState((prevState, props) => {
    //         burger.push(ingredient)
    //     })
    // }
    render() {
        return (
            <div className='ingredients'>
                <div>
                    <button value={this.props.ingredients} onClick={(e) => this.props.addIngredient(this.props.ingredients)}>
                    {this.props.ingredients}
                    </button>
                </div>
            </div>
        )
    }
}

export default Ingredients