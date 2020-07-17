import React from 'react';

const EwButton = (props) => {
    if (props.stackOrder[0]){
        console.log("In Ew Button");
        return (
            <button onClick={() => props.removeLayer()}>Ew! Get rid of that {props.stackOrder[0].name}!</button>
        )
    } else {
        return ("")
    }
}

export default EwButton;