import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/output.css';

function MenuBar(props) {
	return (
		<section
			className="
				fixed
				top-0 right-0
				h-2/4 w-2/5
				z-30
				bg-white
				shadow-2xl
				rounded-md
			"
		>
			<nav
				className="
					flex flex-col items-center 
				"
			>
				<p
					className="
						w-full
						p-4 
						text-center
						text-sm
						border-b-2 border-primary
					"
				>
					Menu
				</p>
				<NavLink 
					exact to="/" 
					className="
						w-full
						p-6 
						text-center
						outline-none

					" 
					activeStyle = {{
						backgroundColor: "#D49b7a"
					}}
					onClick={props.onClick}
				>Início</NavLink>
				<NavLink 
					to="/servicos" 
					className="
						w-full
						p-6 
						text-center
						outline-none
					"
					activeStyle = {{
						backgroundColor: "#D49b7a"
					}}
					onClick={props.onClick}
				>Serviços</NavLink>
				<NavLink 
					to="/contato" 
					className="
						w-full
						p-6 
						text-center
						outline-none

					"
					activeStyle = {{
						backgroundColor: "#D49b7a"
					}}
					onClick={props.onClick}
				>Contato</NavLink>
				<NavLink 
					to="/sobre" 
					className="
						w-full
						p-6	
						text-center		
						outline-none
		
					"
					activeStyle = {{
						backgroundColor: "#D49b7a"
					}}
					onClick={props.onClick}
				>Sobre</NavLink>
			</nav>

		</section>


	);
}

export default MenuBar;