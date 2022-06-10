import React, { Component } from 'react';
import Ingredients from './Ingredients';

class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((item, i) => {
            return <Ingredients 
                    item={item}
                    i={i} />
        })
        return (
            <>
            <h2>BurgerPane</h2>
            <button onClick={this.props.handleRemoveFromStack}
            >Clear Stack</button>

            {stackToRender.reverse()}
            </>
        )
    }
}

export default BurgerPane