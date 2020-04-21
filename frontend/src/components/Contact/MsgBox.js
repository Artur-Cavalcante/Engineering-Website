import React, { useState, useEffect } from 'react';

function MsgBox(props) {
	const [msgConfirmed, setMsgConfirmed] = useState('');
	const [msgFail, setMsgFail] = useState('');
	const [msgWait, setMsgWait] = useState('');
	const [buttonValue, setButtonValue] = useState('');

	const [classMsgBox, setClassMsgBox] = useState('');
	const [classButton, setClassButton] = useState('');

	function handleActive(){
		setClassButton('inline text-white text-xl pl-4');
		setClassMsgBox('absolute z-1 p-6 text-white cursor-pointer');
		setMsgConfirmed('Mensagem enviada com sucesso!');
		setMsgFail('Erro ao enviar mensagem. Por favor, tente novamente!  ');
		setMsgWait('Enviando Mensagem...  ');
		setButtonValue('x');
	};

	function handleClose() {
		setClassButton('');
		setClassMsgBox('');
		setMsgConfirmed('');
		setMsgFail('');
		setMsgWait('');
		setButtonValue('');
	};

	useEffect(()=>{
		handleActive();
	},[props.condition])

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
						className={classButton}
					
					>
						{buttonValue}
					</button>
				</div>
			);
		case 'wait':
			return (
				<div
					className={classMsgBox}
					style={{backgroundColor: '#f4d04a'}}
					onClick={handleClose}
				>
					<p className="inline">{msgWait}</p>
					<button 
						className={classButton}
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
							className={classButton}
					>
						{buttonValue}
					</button>
				</div>
			);
		default:
			return (<div></div>);
	}
	
}

export default MsgBox;

