import { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((stackItem, idx) => {
            return <Ingredients 
                item={stackItem}
                key={"stack"+idx}
            />
        })
        return (
            <>
                <h2>Burger Pane</h2>
                {/* this is another another solution reverses the results set */}
                {/* {stackToRender.reverse()} */}

                {/* this solutions uses flex-direction: column-reverse in css to reverse the results */}
                {stackToRender}
                <button
                    onClick={this.props.handleClearStack}
                >
                    Clear
                </button>
            </>
        )
    }
}