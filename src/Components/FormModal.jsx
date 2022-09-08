import React from 'react'

const FormModal = () => {
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