import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const FormModal = () => {

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");

  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }


  function sendSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('gmail_testMessage', 'template_8up2c46', form.current, 'xOTHsZXlHe_hLzkYH')
      .then((result) => {
        alert('Mensagem enviada com sucesso! :')
      }, (error) => {
          console.log(error.message);
      });
      e.target.reset();
  };

  return (
    <div className='modalForm'>
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form ref={form} onSubmit={sendSubmit} className="contact__form">
                <div className="">
                  <label htmlFor="name">Nome Completo</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="mw-100" type="text" id="name" name="name" placeholder="Digite seu nome" required=""/>
                </div>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="mw-100" type="email" id="email" name="email" placeholder=" Ex: seunome@gmail.com" required=""/>
                </div>
                <div className="">
                  <label htmlFor="assunto">Assunto</label>
                  <input value={assunto} onChange={(e) => setAssunto(e.target.value)} className="mw-100" type="text" id="assunto" name="assunto" placeholder=" Digite o assunto" required=""/>
                </div>
                <div className="">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea value={textarea} onChange={handleChange} className="mw-100" rows="3" id="mensagem" name="message" placeholder=" Escreva sua mensagem..." required=""></textarea>
                </div>
                <div>
                  <button className="mw-100" type="submit">Enviar Mensagem </button>
                </div>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModal