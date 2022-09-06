import React from "react";
import Banner from "./Banner";

function Contact() {
  return (
    <section>
      <Banner name="Fale Conosco" subtitle="Dúvidas sobre produtos e/ou serviços? Nosso time está preparado para atender você." />
      <div className="contact">

        <div className="container">
          <div className="row align-items-center mb-md-5 my-5 justify-content-between">
            <div className="col-lg-6 col-12">
              <form className="contact__form">
                <div className="">
                  <label htmlFor="name">Nome Completo</label>
                  <input className="mw-100" type="text" id="name" name="name" placeholder="Digite seu nome" required="" value="" />
                </div>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <input className="mw-100" type="email" id="email" name="email" placeholder=" Ex: seunome@gmail.com" required="" value=""/>
                </div>
                <div className="">
                  <label htmlFor="assunto">Assunto</label>
                  <input className="mw-100" type="text" id="assunto" name="assunto" placeholder=" Digite o assunto" required="" value=""/>
                </div>
                <div className="">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea className="mw-100" rows="3" id="mensagem" name="mensagem" placeholder=" Escreva sua mensagem..." required=""></textarea>
                </div>
                <div>
                  <button className="mw-100" type="submit">Enviar Mensagem </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-12 info__ajuda">
              <h2>Como podemos ajudar?</h2>
              <div>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M.04 7.531V23.75c0 .563.516.938.984.703L7.54 21.5v-18L.978 6.125A1.535 1.535 0 0 0 .04 7.531Zm9 13.969 9 3v-18l-9-3v18ZM26.009 3.594 19.54 6.5v18l6.516-2.578c.562-.235.984-.797.984-1.406V4.296c0-.562-.563-.937-1.031-.702Z" fill="#23AF70" /></svg>
                  Onde Estamos
                </h3>
                <p>Av. Industrial, 1120 - Distrito Industrial, Governador Valadares (MG)</p>
              </div>
              <div>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21.375 19.125H20.25A1.125 1.125 0 0 1 19.125 18v-5.625c0-.621.504-1.125 1.125-1.125h1.125a2.25 2.25 0 0 1 2.25 2.25v3.375a2.25 2.25 0 0 1-2.25 2.25Zm-14.625 0H5.625a2.25 2.25 0 0 1-2.25-2.25V13.5a2.25 2.25 0 0 1 2.25-2.25H6.75c.621 0 1.125.504 1.125 1.125V18c0 .621-.504 1.125-1.125 1.125Z" fill="#23AF70" stroke="#23AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.813 11.25v-.563A7.312 7.312 0 0 0 13.5 3.375v0a7.312 7.312 0 0 0-7.313 7.313v.562" stroke="#23AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path fillRule="evenodd" clipRule="evenodd" d="M14.203 23.906h-1.406c-.776 0-1.406-.63-1.406-1.406v0c0-.776.63-1.406 1.406-1.406h1.406c.776 0 1.406.63 1.406 1.406v0c0 .776-.63 1.406-1.406 1.406Z" fill="#23AF70" stroke="#23AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.61 22.5H18a2.25 2.25 0 0 0 2.25-2.25v-1.125" stroke="#23AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  SAC
                </h3>
                <p>9999-9999</p>
              </div>
              <div>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none"><path d="M23.571 10.953c-1.078.844-2.437 1.875-7.219 5.344-.937.703-2.671 2.25-4.312 2.25-1.688 0-3.375-1.547-4.36-2.25-4.78-3.469-6.14-4.5-7.218-5.344-.188-.14-.422 0-.422.235v9.562A2.22 2.22 0 0 0 2.29 23h19.5a2.25 2.25 0 0 0 2.25-2.25v-9.563c0-.234-.281-.374-.469-.234ZM12.04 17c1.078.047 2.625-1.36 3.422-1.922 6.234-4.5 6.703-4.922 8.11-6.047.28-.187.468-.515.468-.89V7.25c0-1.219-1.031-2.25-2.25-2.25H2.29A2.25 2.25 0 0 0 .04 7.25v.89c0 .376.14.704.422.891 1.406 1.125 1.875 1.547 8.11 6.047.796.563 2.343 1.969 3.468 1.922Z" fill="#23AF70" /></svg>
                  Email
                </h3>
                <p>comercial@email.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;