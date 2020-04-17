import React, { useState } from 'react';

function MsgBox(props) {
	const [msgConfirmed, setMsgConfirmed] = useState('Mensagem enviada com sucesso!  ');
	const [msgFail, setMsgFail] = useState('Por favor, tente novamente,\n ou ligue para nós, (79) 996268563  ');
	const [msgWait, setMsgWait] = useState('Enviando Mensagem... ');
	const [buttonValue, setButtonValue] = useState('x');

	const [classMsgBox, setClassMsgBox] = useState('absolute z-1 p-6 cursor-pointer');

	function handleClose() {
		setClassMsgBox('');
		setMsgConfirmed('');
		setMsgFail('');
		setMsgWait('');
		setButtonValue('');
	}

	switch (props.condition) {
		case 'confirmed':
			return (
				<div
					className={classMsgBox}
					style={{backgroundColor: '#51a351'}}
					onClick={handleClose}
				>
					<p className="inline">{msgConfirmed}</p>
					<button 
						className="
							inline
							text-white
							top-0
						"
					
					>
						{buttonValue}
					</button>
				</div>
			);
		case 'wait':
			return (
				<div
					className={classMsgBox}
					style={{backgroundColor: '#ffdb58'}}
					onClick={handleClose}
				>
					<p className="inline">{msgWait}</p>
					<button 
						className="
							inline
						"
					>
						{buttonValue}
					</button>
				</div>
			);
		case 'fail':
			return (
				<div
					className={classMsgBox}
					style={{backgroundColor: '#a35151'}}
					onClick={handleClose}
				>
					<p className="inline">{msgFail}</p>
					<button 
							className="
								text-white
								p-6
							"
					>
						{buttonValue}
					</button>
				</div>
			);
	}
	return <div></div>
	
}

export default MsgBox;

