import React, {Component} from 'react';
import IngredientList from './IngredientList';

export default class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((stackItem, i) => {
            return <IngredientList
                item={stackItem}
                key={"stack"+i}
            />
        })
        return (
            <>
                <h2>Burger Pane</h2>
                {stackToRender.reverse()}
                <button onClick={this.props.handleRemoveFromStack}>Clear</button>
            </>
        )
    } 
}