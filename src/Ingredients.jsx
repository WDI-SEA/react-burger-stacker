const Ingredients = (props) => {
    return (
        <p style={{backgroundColor: props.color}}>
            {props.ingredients}
        </p>
    )
}

export default Ingredients