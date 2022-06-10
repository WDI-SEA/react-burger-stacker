import React, { Component } from 'react'

export default class Ingredient extends Component {

    render() {
        return (
            <>
                <div>
                    <form className={this.props.isBurgerPane === false ? 'grid grid-cols-2':'grid grid-cols-1' }>
                        
                        <p className="text-xs" style={{color: `${this.props.ingred.color}`}}>{this.props.ingred.name}</p>

                        { this.props.isBurgerPane === false ? 
                        <button
                            className='text-xs border rounded-lg max-h-[1.2rem] hover:text-slate-500'
                            type="button"
                            onClick={()=>{this.props.handleAddIngredientClick(this.props.ingred)}}
                        >Add</button>
                    : ""}
                    </form>
                </div>
            </>
        )
    }
}
