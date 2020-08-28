import React from 'react';

const ClearBurger = (props) => {
	return (
		<button className="clear"
			onClick={() => {
				props.clearBurger()
			}}
		>
			Clear
		</button>
	);
};


export default ClearBurger