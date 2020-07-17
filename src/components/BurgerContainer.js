import React from 'react';
import BurgerLayer from './BurgerLayer';
import EwButton from './EwButton.js'


const BurgerContainer = (props) => {
    let layerKey = 0;
    return (
        <div className="burger-container">
            <EwButton stackOrder={props.stackOrder} removeLayer={props.removeLayer}/>
            {props.stackOrder.map(layer => (
                <BurgerLayer 
                    key={layerKey++}
                    color={layer.color} />
            ))}
            <button onClick={() => props.clearStack()}>Throw it all away!</button>
        </div>
    );
}

export default BurgerContainer;