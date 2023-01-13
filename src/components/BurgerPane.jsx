import { Component } from "react";
import Ingredients from "./Ingredients";

export default class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((item, i) => {
            <Ingredients 
                item={item}
                key={i}
            />
        })
        return(
            <>
                <h2>Burger Pane</h2>
                
                {stackToRender.reverse()}
                <button onClick={this.props.handleRemoveFromStack}>
                    Clear
                </button>
                    
            </>
        )
    }
}