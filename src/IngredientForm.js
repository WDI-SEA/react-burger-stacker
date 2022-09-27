import React, { Component } from "react";

class IngredientForm extends Component {
    state = {
        input: ""
    }
    handleFormSubmit = e => {
        this.props.handleAddIngredient(e);
        // clear form input
        this.setState({input: ""})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="input" placeholder="Enter new ingredient"
                        value={this.state.input}
                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                        className="border rounded" 
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default IngredientForm;
