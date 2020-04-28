import React from 'react';

function BackgroundMenuBar(props){
	return(
		<div
			id="backgroundMenuBar"
			className="
				fixed
				w-full
				h-full
				top-0
				left-0
				bg-bg_menu_bar
				z-10
			"
			onClick={props.onClick}
		>
		</div>
	);
};

export default BackgroundMenuBar;