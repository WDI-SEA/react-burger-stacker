import {useState} from "react";

function IngredientForm(props) {
    const [input, setInput] = useState("");
    const handleFormSubmit = e => {
        props.handleAddIngredient(e);
        // clear form input
        setInput("");
    }
    return (
        <div className="mt-3">
            <form onSubmit={e => handleFormSubmit(e)}>
                <div className="flex flex-col items-center">
                    <input type="text" placeholder="Enter new ingredient"
                        value={input}
                        onChange={e => setInput(e.target.value)}
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

export default IngredientForm;
