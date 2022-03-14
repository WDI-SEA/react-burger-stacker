const ClearBtn = ({clearBurger}) => {
    return(
        <input
            type="submit"
            value="Clear Burger!"
            onClick={clearBurger}
        />
    )
}
 
export default ClearBtn;