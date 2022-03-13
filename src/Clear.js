export default function Clear (props) {
    return (
        <>
        <div className='ingredient'>
            <button onClick={() => {props.clearBurgerPane()}}>Clear</button>
        </div>
        </>
    )
}