const Ingredient = (props) => {
    return (
        <p style={{backgroundColor: props.color}} key={props.key}>
            {props.ingredient}
        </p>
    )
}

export default Ingredient