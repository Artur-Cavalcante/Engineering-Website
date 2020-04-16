import React, { useState, useEffect } from 'react';
import '../styles/output.css';
import axios from 'axios';
import MsgBox from './MsgBox'


import e_mail_img from './images/contact/Email_negativa-12.svg'
import telefone_img from './images/contact/Telefone_Negativa.svg'
import instagram_img from './images/contact/Instagram_Negativa.svg'

function Contact() {

    const [nome, setNome] = useState('');
    const [e_mail, setE_mail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);
    const [msgCondition, setMsgCondition] = useState('');

    function handleFormSubmit(){
        setIsSubmit(true);
    }

    function handleSendMsg() {
        setMsgCondition('wait');
        console.log('passou')
        axios.post('http://192.168.15.60:3333/api/contato', { Name: nome, Email: e_mail, Subject: assunto, Text: mensagem })
            .then(() => { console.log('foi');  setMsgCondition('confirmed');})
            .catch((error) => { console.log(error);  setMsgCondition('fail'); });
    };

    useEffect(() => {

    }, 
    [isSubmit])
    return (
        <section id="contact-box"
            className="
               bg-gray-400 
               bg-bg_gray
               h-landing

            "
        >
            <div
                className="
                    p-8
                    flex flex-row justify-center items-center
                "
            >
                <MsgBox condition={msgCondition}/>
                <h1
                    className="
                        flex flex-row justify-center items-center
                        
                        bg-primary

                        w-64 h-12
                        rounded-sm

                        //border-2
                        //border-second
                        shadow-xl
                        text-md
                        
                    "
                >
                    Entre em contato
                </h1>

            </div>

            <div
                className="
                    grid grid-cols-4
                    gap-12
                    justify-center items-center
                "
            >

                <div
                    className="
                        col-span-3
                        bg-white
                        rounded-md
                        m-5
                        overflow-y-auto
                        overflow-x-visible
                        h-full
                        max-h-432
                    "
                >
                    <form
                        id="contact_form"
                        className="p-3"

                        onSubmit={handleFormSubmit}
                    >
                        {/* Lembrar de colocar alert de email  enviado */}
                        <div
                            className="
                            p-3    
                        ">
                            {/* <img 
                                src={nome_img} 
                                alt="nome_img" 
                                className=" 
                                    inline-block
                                "
                            /> */}
                            <label >Nome</label>
                            <input
                                type="text"
                                placeholder="Ex: João"
                                onChange={(e) => { setNome(e.target.value) }}
                                required
                                className="
                                    block
                                    w-full
                                    border-b-2
                                    focus:border-primary focus:bg-gray-200
                                    
                                
                                "
                            />
                        </div>

                        <div className="
                            p-3    
                        ">
                            {/* <img src={e_mail_img} alt="e_mail_img" className=" 
                                    inline-block
                                "/> */}
                            <label>E-mail</label>
                            <input
                                type="email"
                                placeholder="Ex: joao_paulo12@outlook.com"
                                onChange={(e) => { setE_mail(e.target.value) }}
                                required
                                className="
                                block
                                w-full
                                border-b-2
                                focus:border-primary focus:bg-gray-200
                                "
                            />
                        </div>

                        <div className="
                            p-3   
                        ">
                            {/* <img src={caneta_img} alt="caneta_img" className=" 
                                    inline-block
                                "/> */}
                            <label>Assunto</label>
                            <input
                                type="text"
                                placeholder="Ex: Orçamento de Reforma"
                                onChange={(e) => { setAssunto(e.target.value) }}
                                required
                                className="
                                block
                                w-full
                                border-b-2
                                focus:border-primary focus:bg-gray-200
                                
                                "
                            />
                        </div>

                        <div className="
                            p-3

                        ">
                            {/* <img src={caneta_papel_img} alt="caneta_papel_img" className=" 
                                    inline-block
                                "/> */}
                            <label>Mensagem</label>
                            <textarea
                                placeholder="Ex: Preciso de um orçamento para a reforma do..."
                                onChange={(e) => { setMensagem(e.target.value) }}
                                required
                                className="
                                block
                                w-full
                                border-b-2
                                focus:border-primary focus:bg-gray-200
                                resize-y
                                "
                            />
                        </div >

                        <div className="p-3">

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
                                 "
                            />
                        </div>
                    </form>
                </div>

                <aside
                    className="
                        col-span-1
                        grid grid-rows-3
                        justify-center items-center
                        bg-white
                        m-5
                        min-h-432
                        rounded-md
                    ">
                    <div
                        className="
                        grid grid-rows-1
                        justify-center content-center self-center

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
                        
                                "
                        >
                            E-mail <br />
                            eng.ionecavalcante@hotmail.com
                        </p>
                    </div>

                    <div className="
                        grid grid-rows-1
                        justify-center content-center self-center
                        
                        "
                    >
                        
                        <img 
                            src={telefone_img}
                            alt="telefone_img"
                            className="
                            ml-8
                            w-12
                                h-full
                            "
                        />
                        <p className="text-center">
                            Telefone <br />
                            (79) 99626-8563
                        </p>
                    </div>

                    <div className="
                        grid grid-rows-1
                        justify-center content-center

                        "
                    >
                        <a href="https://instagram.com/eng.ionecavalcante/" target="_blank" style={{ cursor: 'pointer' }}>
                            <img 
                                src={instagram_img} 
                                alt="instagram_img" 
                                className="
                                    w-12
                                "
                            />
                            <p className="text-center">
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