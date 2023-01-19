import { Component } from 'react'
import Ingredient from './Ingredient'


export default class BurgerPane extends Component {
    
    render() {
        const stackToRender = this.props.stack.map((stackItem, i) =>{
    return  <Ingredient
                item={stackItem}
                key={`stackItem-${i}`}
            />
        })
        return (
            <div>
                <h2>BurgerPane</h2>
                {stackToRender.reverse()}
            </div>
        )
    }
}