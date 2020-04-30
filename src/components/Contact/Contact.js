import React, { useState } from 'react';
import '../../styles/output.css';

import axios from 'axios';
import MsgBox from './MsgBox'

import Aside from './Aside';
import Form from './Form';
import ToTop from './ToTop';

function Contact() {

    const [nome, setNome] = useState('');
    const [e_mail, setE_mail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [numero_telefone, setNumero_telefone] = useState('');


    const [msgCondition, setMsgCondition] = useState('');


    function handleMask(value) {
        //This mask check if is a phone number, or a house number
        if (value.length === 15) {
            //(xx) xxxxx-xxxx phone
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{5})(\d)/, '$1-$2');
        } else {
            //(xx) xxxx-xxxx house
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{4})(\d)/, '$1-$2');
        };
    };


    function handleSendMsg(formContact) {
        //Set message condition from msgbox to wait, do post, then set confirmed, or if error, set fail
        //After remove value from  numero_telefone input, and clear all input
        setMsgCondition('wait');
        
        axios
            .post('http://api.ionecavalcanteengenharia.com.br/api/contato', {
                Name: nome,
                Email: e_mail,
                PhoneNumber: numero_telefone,
                Subject: assunto,
                Text: mensagem
            },
            { timeout: 10000})
            .then((resp) => { 
                if(resp.data.inf){
                    setMsgCondition('confirmed');
                    return; 
                }else{
                    setTimeout(() => {setMsgCondition('fail')}, 6000);
                    return;
                };
            })
            .catch((error) => { 
                if(error){
                    if (error.code === 'ECONNABORTED') {
                        setMsgCondition('timeout');
                        return;
                    }else{
                        setTimeout(() => {setMsgCondition('fail')}, 6000);
                        return;
                    };
                };
            });
        setNumero_telefone(undefined);
        formContact.reset();
    };


    return (
        <section
            id="contact-box"
            className="
               bg-bg_gray
               h-full
               p-2
               pb-16
               sm:p-2 sm:pb-16 
               md:p-2 md:pb-16
               lg:p-4 lg:pb-16
               xl:p-6 xl:pb-16
            "
        >
            <div
                className="
                    p-8
                    flex flex-row-2 justify-center items-center
                    
                "
            >
                <MsgBox condition={msgCondition} />
                <h1
                    className="
                        flex flex-row justify-center items-center
                        bg-primary
                        w-56 h-12
                        rounded-sm
                        shadow-xl
                        text-sm md:text-base lg:text-base xl:text-base
                    "
                >
                    Entre em contato
                </h1>

            </div>

            <div
                className="
                    xl:grid grid-cols-4
                    flex flex-wrap
                    gap-1
                    xl:gap-10
                    h-full
                    justify-center items-center
                "
            >

                <div
                    className="
                        col-span-3

                        bg-white
                        rounded-md
                        m-3
                        overflow-y-auto
                        overflow-x-visible
                        h-auto
                        shadow-lg
                        w-full
                        min-h-550
                        max-h-550
                    "
                >
                    <Form 
                        setNome={setNome}
                        setE_mail={setE_mail}
                        setNumero_telefone={setNumero_telefone}
                        setAssunto={setAssunto}
                        setMensagem={setMensagem}

                        numero_telefone={numero_telefone}

                        handleMask={handleMask}
                        handleSendMsg={handleSendMsg}
                    />
                </div>

                <Aside />
            </div>

            <ToTop />
        </section>
    );
};

export default Contact;
