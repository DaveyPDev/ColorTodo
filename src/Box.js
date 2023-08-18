import React from 'react';
import './Box.css'

const Box = ({ width, height, backgroundColor, removeBox }) => {
	const boxStyle = {
		width           : `${width}px`,
		height          : `${height}px`,
		backgroundColor
	};

	return (
		<div className="Box" style={boxStyle}>
			<button onClick={removeBox}>X</button>
		</div>
	);
};

export default Box;
