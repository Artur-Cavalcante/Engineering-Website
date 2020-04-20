import React from 'react'

function ButtonNav(props) {
	return (

		<div className="
				h-full 
				flex flex-row justify-end
				md:hidden
				lg:hidden
				xl:hidden
				z-10
				inline
			"
			onClick={props.onClick}
		>

			<div
				className="
					mr-2
					w-6 h-6 
					self-center 				
					cursor-pointer
				">
				<div className="w-full h-1 bg-second mb-1"></div>
				<div className="w-full h-1 bg-second mb-1"></div>
				<div className="w-full h-1 bg-second mb-1"></div>
			</div>
		</div>
	);
}

export default ButtonNav;