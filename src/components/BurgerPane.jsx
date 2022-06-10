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
        <div className="cols-start-2" >
            <h2 className='text-xl row-start-2' >BurgerPane</h2>
                <button className="bg-gray-400 border-gray-600 p-2 border-solid border-2 border-black-500"
                    onClick={this.props.handleRemoveFromStack} >
                        Clear Stack
                </button>
            {stackToRender.reverse()}
        </div>
        )
    }
}

export default BurgerPane