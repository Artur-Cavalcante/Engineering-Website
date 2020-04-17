import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/output.css';

function MenuBar() {
	return (

		<section
			className="
				fixed
				top-0 left-0
				h-full w-2/4
				z-30
				bg-white
				shadow-2xl
			"
		>
			<nav
				className=""
			>
				<NavLink exact to="/" >Início</NavLink>
				<NavLink to="/servicos" >Serviços</NavLink>
				<NavLink to="/contato" >Contato</NavLink>
				<NavLink to="/sobre" >Sobre</NavLink>
			</nav>

		</section>


	);
}

export default MenuBar;