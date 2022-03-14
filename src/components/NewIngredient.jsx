import React, { useState } from 'react'

const NewIngredientForm = ({addNewIngredient}) => {
    const [newIngredient, setNewIngredient] = useState({
        name: "",
        color: ""
    })


    const textChangeHandler = (e) => {
        setNewIngredient({
            ...newIngredient,
            [e.target.name]: e.target.value,      
        }, console.log(newIngredient))
    }

    const submitForm = (e) => {
        e.preventDefault()
        addNewIngredient(newIngredient)
        setNewIngredient({
            name:"",
            color: ""
        })
    }
        return (
            <form onSubmit={submitForm}>
                <label htmlFor="name">name: </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={newIngredient.name} 
                    onChange={textChangeHandler}
                />
                <label htmlFor="color">color: </label>
                <input 
                    type="text" 
                    name="color" 
                    id="color" 
                    value={newIngredient.color} 
                    onChange={textChangeHandler}
                />
                <button type='submit'>Add Ingredient</button>
            </form>
        );
    }
 
export default NewIngredientForm;