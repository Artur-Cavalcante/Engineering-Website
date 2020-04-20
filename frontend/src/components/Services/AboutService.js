import React from 'react';

function AboutService(props) {

	switch (props.service) {
		case 'Reformas Residênciais e Comerciais':
			return(
				<div className="">
					 <div 
                        className=""
                    >
                        {props.service}
                    </div>
                    <h3
                        className=""
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium facere perferendis est ipsa voluptatem repudiandae! Laudantium modi itaque iste totam? Maiores sunt reprehenderit cumque in, blanditiis numquam omnis animi obcaecati.
                    </h3>
				</div>

			);
		// case 'Projetos':
		// 	return();
		// case 'Levantamento':
		// 	return();
		// case 'Consultoria':
		// 	return();
		// case 'Licitação':
		// 	return();
		// case 'Auditoria':
		// 	return();
		default:
			break;
	}
}

export default AboutService;