import React, { Component } from 'react'

class NewIngredientForm extends Component {
    state = { 
       name: "",
       color: ""
     }

    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,      
        }, () => console.log(this.state))
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.addNewIngredient(this.state)
        this.setState({
            name:"",
            color: ""
        })
    }
    
    render() { 
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="name">name: </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={this.state.name} 
                    onChange={this.textChangeHandler}
                />
                <label htmlFor="color">color: </label>
                <input 
                    type="text" 
                    name="color" 
                    id="color" 
                    value={this.state.color} 
                    onChange={this.textChangeHandler}
                />
                <button type='submit'>Add Ingredient</button>
            </form>
        );
    }
}
 
export default NewIngredientForm;