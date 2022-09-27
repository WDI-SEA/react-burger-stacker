import React, {Component} from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {

    render() {
        const addedList = this.props.stackList.map((item, idx) => {
            let classBtn = 'hide'
            if (idx === 0) {
                classBtn = ''
            } 
            return (
                <li key={`item${idx}`} style={{backgroundColor: item.color}}>
                <BurgerStack 
                item={item}
                />
                <button className={`${classBtn}`} onClick={this.props.undo} >Undo</button>

                </li>
            )
        })
        return (
            <ul>
            {addedList}
            </ul>
        )
    }
}