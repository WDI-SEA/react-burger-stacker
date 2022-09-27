import React, {Component} from 'react'

export default class BurgerPane extends Component{

    render(){
        
        return(
            <div>
                <div>
                    <div>
                        {this.props.selectedIngredients}
                    </div>
                
                </div>
            </div>
        )
    }
}