
const Ingredient = (props) => {

    return (
        <>
            <div onClick={() => {
                props.addToBurger(props.ingredient)
            }} style={{ backgroundColor: props.ingredient.color }}>
                {props.ingredient.name}
            </div>
        </>
    )
}


// class Ingredient extends Component {

//     render() {
//         return (
//             <>
// <div onClick={() => { this.props.handleClicker(this.props.ingredient) }} style={{ backgroundColor: this.props.ingredient.color }}>
//     {this.props.ingredient.name}
// </div>

//             </>
//         );
//     }
// }

export default Ingredient;