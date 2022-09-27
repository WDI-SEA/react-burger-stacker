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
            <div className="mt-3">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="flex flex-col items-center">
                        <input type="text" name="input" placeholder="Enter new ingredient"
                            value={this.state.input}
                            onChange={e => this.setState({[e.target.name]: e.target.value})}
                            className="border rounded text-center select-none focus:placeholder-white" 
                            required
                        />
                        <button type="submit" 
                            className="mt-1 px-2 py-1 bg-green-500 border rounded text-sm select-none hover:bg-green-700">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default IngredientForm;
