import React, { useState } from 'react';
import '../../styles/output.css';
import axios from 'axios';
import MsgBox from './MsgBox'


import e_mail_img from '../images/contact/Email_negativa-12.svg'
import telefone_img from '../images/contact/Telefone_Negativa.svg'
import instagram_img from '../images/contact/Instagram_Negativa.svg'

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
                .replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
        }
    }


    function handleSendMsg(formContact) {
        //Set message condition from msgbox to wait, do post, then set confirmed, or if error, set fail
        //After remove value from  numero_telefone input, and clear all input
        setMsgCondition('wait');

        axios.post('http://ionecavalcanteengenharia-com-br.umbler.net/api/contato', {
            Name: nome,
            Email: e_mail,
            PhoneNumber: numero_telefone,
            Subject: assunto,
            Text: mensagem
        })
            .then(() => { setMsgCondition('confirmed') })
            .catch((error) => { console.log(error); setMsgCondition('fail'); });
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
               lg:p-4
               xl:p-6
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
                    <form
                        id="contact_form"
                        className="p-3"
                        onSubmit={(e) => {
                            let form = e.target;
                            e.preventDefault();
                            handleSendMsg(form)
                        }
                        }
                    >
                        <div
                            className="p-2 "
                        >
                            <label className="p-1 text-sm md:text-base lg:text-base xl:text-base" >Nome</label>
                            <input
                                type="text"
                                placeholder="Ex: João"
                                onChange={(e) => { setNome(e.target.value) }}
                                required
                                className="
                                    block
                                    w-full
                                    rounded-md
                                    focus:outline-none focus:shadow-outline focus:border-primary
                                    
                                    text-sm
                                    shadow-md
                                    p-2
                                    mt-2
                                "
                            />
                        </div>

                        <div
                            className="p-2"
                        >
                            <label className="p-1 text-sm md:text-base lg:text-base xl:text-base">E-mail</label>
                            <input
                                type="email"
                                placeholder="Ex: joao_paulo12@outlook.com"
                                onChange={(e) => { setE_mail(e.target.value) }}
                                required
                                className="
                                    block
                                    w-full
                                    rounded-md
                                    focus:outline-none focus:shadow-outline focus:border-primary

                                    text-sm
                                    shadow-md
                                    p-2
                                    mt-2
                                "
                            />
                        </div>
                        <div
                            className="p-2"
                        >
                            <label className="p-1 text-sm md:text-base lg:text-base xl:text-base">Telefone</label>
                            <input
                                type="text"
                                placeholder="Ex: (79) 99626-8563"
                                onChange={(e) => { setNumero_telefone(handleMask(e.target.value)) }}
                                maxLength='15'
                                value={numero_telefone}
                                required
                                className="
                                    block
                                    w-full
                                    rounded-md
                                    focus:outline-none focus:shadow-outline focus:border-primary

                                    text-sm
                                    shadow-md
                                    p-2
                                    mt-2
                                "
                            />
                        </div>

                        <div
                            className="p-2"
                        >
                            <label className="p-1 text-sm md:text-base lg:text-base xl:text-base">Assunto</label>
                            <input
                                type="text"
                                placeholder="Ex: Orçamento de Reforma"
                                onChange={(e) => { setAssunto(e.target.value) }}
                                required
                                className="
                                    block
                                    w-full
                                    rounded-md
                                    focus:outline-none focus:shadow-outline focus:border-primary

                                    text-sm
                                    shadow-md
                                    p-2
                                    mt-2
                                "
                            />
                        </div>

                        <div
                            className="p-2"
                        >
                            <label className="p-1 text-sm md:text-base lg:text-base xl:text-base">Mensagem</label>
                            <textarea
                                placeholder="Ex: Preciso de um orçamento para a reforma do..."
                                onChange={(e) => { setMensagem(e.target.value) }}
                                required
                                className="
                                    block
                                    w-full
                                    rounded-md
                                    focus:outline-none focus:shadow-outline focus:border-primary

                                    text-sm
                                    shadow-md
                                    p-2
                                    mt-2
                                "
                            />
                        </div >

                        <div
                            className="p-2"
                        >

                            <input
                                name="Submit"
                                type="submit"
                                value="Enviar"
                                className="
                                    cursor-pointer
                                    w-full
                                    p-3
                                    bg-primary
                                    hover:bg-primary_hover
                                    hover:border-primary hover:border-2

                                    text-sm md:text-base lg:text-base xl:text-base
                                "
                            />
                        </div>
                    </form>
                </div>

                <aside
                    className="
                        col-span-1
                        flex flex-col
                        
                        justify-around items-center
                        xl:justify-between
                        
                        m-3
                        h-auto
                        
                        w-full
                        min-h-550
                        max-h-550

                        
                    "
                >
                    <div
                        className="
                            flex flex-col
                            justify-center items-center
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg
                        "
                    >
                        <img
                            src={e_mail_img}
                            alt="e_mail_img"
                            className="
                                justify-center
                                self-center
                                h-auto
                                w-12
                            "
                        />
                        <p
                            className="
                                text-center
                                text-sm
                            "
                        >
                            E-mail <br />
                            eng.ionecavalcante@hotmail.com
                        </p>
                    </div>

                    <div
                        className="
                            flex flex-col
                            justify-center items-center
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg
                        "
                    >

                        <img
                            src={telefone_img}
                            alt="telefone_img"
                            className="
                                w-12
                                h-auto
                            "
                        />
                        <p
                            className="
                                text-center
                                text-sm
                            "
                        >
                            Telefone <br />
                            (79) 99626-8563
                        </p>
                    </div>

                    <div 
                        className="
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg

                            flex flex-col
                            justify-center
                        "
                    >
                        <a
                            href="https://instagram.com/eng.ionecavalcante/"
                            target="_blank"
                            className="
                            flex flex-col
                            justify-center items-center
                            cursor-pointer
                            
                        "

                        >
                            <img
                                src={instagram_img}
                                alt="instagram_img"
                                className="
                                    w-12
                                "
                            />
                            <p
                                className="
                                    text-center
                                    text-sm
                                "
                            >
                                Instagram <br />
                                @eng.ionecavalcante
                            </p>

                        </a>
                    </div>

                </aside>
            </div>
        </section>
    );
};

export default Contact;
