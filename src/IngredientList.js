import React, {Component} from 'react'

export default class ingredientList extends Component{

     

    render(){
    
        return(
            <div>
            <div>
                {this.props.ingredients}
            </div>
            </div>
        )
    }

}