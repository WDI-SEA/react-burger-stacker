function ClearBurger(props) {
    return (
        <div className="clearButton">
            <button onClick={props.clearOrder}>Clear Burger</button>
        </div>
    )
}

export default ClearBurger