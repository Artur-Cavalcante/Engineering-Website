import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function MsgBox(props) {
	const [msgConfirmed, setMsgConfirmed] = useState('');
	const [msgFail, setMsgFail] = useState('');
	const [msgWait, setMsgWait] = useState('');
	const [msgTimeout, setMsgTimeout] = useState('');
	const [buttonValue, setButtonValue] = useState('');

	const [classMsgBox, setClassMsgBox] = useState('');
	const [classMsg, setClassMsg] = useState('');

	function handleActive() {
		setClassMsg('inline pr-3 w-full tracking-tight text-white text-sm sm:text-sm md:text-sm lg:text-base xl:text-base ')
		setClassMsgBox('absolute z-1 p-6 flex justify-center items-center sm:flex sm:items-center sm:justify-center md:flex-none lg:flex-none xl:flex-none w-72 sm:w-72 md:w-auto lg:w-auto xl:w-auto justify-between cursor-pointer shadow-lg ');

		setMsgConfirmed('Mensagem enviada com sucesso, entraremos em contato!  ');
		setMsgFail('Erro ao enviar mensagem, tente novamente!  ');
		setMsgWait('Enviando Mensagem...  ');
		setMsgTimeout('Mensagem demorou muito a ser enviada, tente novamente!  ');

		setButtonValue(<FaTimes className="inline" color="#ffffff" size="1rem" />);
	};

	function handleClose() {
		setClassMsg('');
		setClassMsgBox('');

		setMsgConfirmed('');
		setMsgFail('');
		setMsgWait('');
		setMsgTimeout('');

		setButtonValue('');
	};

	useEffect(() => {
		handleActive();
	}, [props.condition])

	switch (props.condition) {
		case 'confirmed':
			return (
				<div
					className={classMsgBox}
					style={{ backgroundColor: '#51a351' }}
					onClick={handleClose}
				>
					<p className={classMsg}>{msgConfirmed}</p>
					{buttonValue}
				</div>
			);
		case 'wait':
			return (
				<div
					className={classMsgBox}
					style={{ backgroundColor: '#f89406' }}
					onClick={handleClose}
				>
					<p className={classMsg}>{msgWait}</p>
					{buttonValue}
				</div>
			);
		case 'fail':
			return (
				<div
					className={classMsgBox}
					style={{ backgroundColor: '#bd362f' }}
					onClick={handleClose}
				>
					<p className={classMsg}>{msgFail}</p>
					{buttonValue}
				</div>
			);
		case 'timeout':
			return(
				<div
					className={classMsgBox}
					style={{ backgroundColor: '#bd362f' }}
					onClick={handleClose}
				>
					<p className={classMsg}>{msgTimeout}</p>
					{buttonValue}
				</div>
			);
		default:
			return (<div></div>);
	}

}

export default MsgBox;

