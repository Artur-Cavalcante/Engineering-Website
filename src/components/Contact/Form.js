import React from 'react';
import '../../styles/output.css';


function Form(props){
    return(
        <form
            id="contact_form"
            className="p-3"
            onSubmit={
                (e) => {
                    let form = e.target;
                    e.preventDefault();
                    props.handleSendMsg(form)
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
                    onChange={(e) => { props.setNome(e.target.value) }}
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
                    onChange={(e) => { props.setE_mail(e.target.value) }}
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
                    onChange={(e) => { props.setNumero_telefone(props.handleMask(e.target.value)) }}
                    maxLength='15'
                    value={props.numero_telefone}
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
                    onChange={(e) => { props.setAssunto(e.target.value) }}
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
                    onChange={(e) => { props.setMensagem(e.target.value) }}
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
    );
};

export default Form;