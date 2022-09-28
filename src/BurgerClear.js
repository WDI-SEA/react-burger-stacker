function BurgerClear(props) {
    return (
        <div className="mt-11">
            <button onClick={props.handleBurgerClear}
                className="px-2 py-1 bg-red-500 border rounded text-sm select-none hover:bg-red-700">
                Clear
            </button>
        </div>
    );
}

export default BurgerClear;
