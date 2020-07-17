import React, {useState} from 'react';




const Ingredients = (props) => {
    const [ingredient, setIngredient] = useState("all")
   
    return (
        <div className="flex-column">
            <h1>Ingredients:</h1>
            {props.burger.map((element)=> 
                <button onClick={() => {
                    const newValue ="`${element.name}`";
                    setIngredient(newValue);
                }}>
                     Click me {element.name}
                </button>
            )}
        </div>
    )

}

export default Ingredients