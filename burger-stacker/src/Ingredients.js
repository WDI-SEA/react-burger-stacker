import { Component } from "react";
import List from './List.js'
import Stack from './Stack.js'

class Ingredients extends Component {

    state = {
        allIngredients: [
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
        ],

        addedIngredients: []
    }

    addIngredient = (e) => {
        e.preventDefault()
        let lastAdded = this.state.allIngredients[e.target.id]
        let newArray = this.state.addedIngredients

        newArray.unshift(lastAdded)

        this.setState({
            addedIngredients: newArray
        })
        console.log('added ingredients: ', this.state.addedIngredients)
    }

    clearStack = () => {
        console.log('clearing stack')
        this.setState({
            addedIngredients: []
        })
    }

    render () {
        return (
        <>
            <div className="leftColumn">
                <List list={this.state.allIngredients} add={this.addIngredient}/>
            </div>
            <div className="rightColumn">
                <Stack stackedItems={this.state.addedIngredients} clearStack={this.clearStack}/>
            </div>
        </>
        )
    }
}

export default Ingredients