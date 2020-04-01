import React from 'react';

import nome_img from './images/contact/User1.svg'
import e_mail_img from './images/contact/Email_negativa-12.svg'
import caneta_img from './images/contact/Caneta.svg'
import caneta_papel_img from './images/contact/Caneta-e-papel.svg'
import telefone_img from './images/contact/Telefone_Negativa.svg'
import instagram_img from './images/contact/Instagram_Negativa.svg'

function Contact() {
    return (
        <section className="contact-box">
            <h1>
                Entre em contato
            </h1>

            <div>
                <form action="" method="post">
                    {/* Lembrar de colocar alert de email  enviado */}
                    <div>
                        <img src={nome_img} alt="nome_img" />
                        <label>Nome</label>
                        <input type="text" placeholder="Ex: João" />
                    </div>

                    <div>
                        <img src={e_mail_img} alt="e_mail_img" />
                        <label>E-mail</label>
                        <input type="text" placeholder="Ex: joao_paulo12@outlook.com" />
                    </div>

                    <div>
                        <img src={caneta_img} alt="caneta_img" />
                        <label>Assunto</label>
                        <input type="text" placeholder="Ex: Orçamento de Reforma" />
                    </div>

                    <div>
                        <img src={caneta_papel_img} alt="caneta_papel_img" />
                        <label>Mensagem</label>
                        <input type="text" placeholder="Ex: Preciso de um orçamento para a reforma do..." />
                    </div>

                    <div>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>

            <aside>
                <div>
                    <img src={e_mail_img} alt="e_mail_img" />
                    <p>E-mail</p>
                    <p>eng.ionecavalcante@hotmail.com</p>
                </div>

                <div>
                    <img src={telefone_img} alt="telefone_img" />
                    <p>Telefone</p>
                    <p>(79) 99626-8563</p>
                </div>

                <div>
                    <a href="https://instagram.com/eng.ionecavalcante/" target="_blank" style={{cursor: 'pointer'}}>
                        <img src={instagram_img} alt="instagram_img" />
                        <p>Instagram</p>
                        <p>@eng.ionecavalcante</p>

                    </a>
                </div>

            </aside>
        </section>
    );
};

export default Contact;