import React from 'react';

const BurgerLayer = (props) => {
    return (
        <div class="burger-layer" style={{
            background: props.color
        }}></div>
    );
}

export default BurgerLayer;