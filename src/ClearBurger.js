import React from 'react'
import Button from 'react-bootstrap/Button';

function ClearBurger(props) {
    return (
        <div>
            <Button variant="outline-primary" onClick={(e) => props.action(e)}>
                🍔 EAT ME
            </Button>
        </div>
    )
}

export default ClearBurger