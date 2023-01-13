import { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
    render () {
        const stackToRender = this.props.stack.map((stackItem, i) => {
            return <Ingredient 
                item={stackItem}
                key={'stack'+i}
            />
        })
        return (
            <>
                <h2>burger pane</h2>
                {stackToRender}
                <button
                    onClick={this.props.handleRemoveFromStack}
                >
                Clear
                </button>
            </>
        )
    }
}