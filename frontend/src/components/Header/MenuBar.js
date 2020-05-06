import React from 'react';
import '../../styles/output.css';

function MenuBar(props) {
	return (
		<section
			className="
				fixed
				top-0 right-0
				h-64 w-2/4
				z-30
				bg-white
				shadow-2xl
				rounded-md
			"
		>
			<nav
				className="
					flex flex-col items-center 
					list-none
				"
			>
				<div
					className="
						w-full
						p-4 
						border-b-2 border-primary
						text-center
						text-sm

					"
				>
					Menu
				</div>

				<a
					href="#services-box-1"
					className="
						w-full
						outline-none
						focus:bg-primary
						hover:bg-primary				
					"
				>
					<li 
						className="
							p-6 
							outline-none
							text-center
							text-sm
						"
						onClick={props.onClick}
					>
						Serviços
					</li>
				</a>

				<a
					href="#about-box"
					className="
						w-full
						outline-none
						focus:bg-primary
						hover:bg-primary	
					"
				>
					<li 
						className="
							p-6	
							outline-none
							text-center
							text-sm		
						"
						onClick={props.onClick}
					>
						Sobre
					</li>
				</a>
				
				<a
					href="#contact-box"
					className="
						w-full
						outline-none
						focus:bg-primary
						hover:bg-primary	
					"
				>
					<li 
						className="
							p-6 
							outline-none
							text-center
							text-sm
						"
						onClick={props.onClick}
					>
						Contato
					</li>
				</a>

			</nav>
		</section>
	);
};

export default MenuBar;