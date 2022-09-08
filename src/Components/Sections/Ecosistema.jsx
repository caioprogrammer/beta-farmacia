import React from 'react'

const Ecosistema = () => {
  return (
    <section className="ecosistema bg-green py-4">
      <div className="container">
      <div className="d-flex justify-content-between align-items-center my-5">
        <div className="col-lg-5">
              <h2>
                Já tem produto e quer trazer para o ecossistema Kapsula?
              </h2>
              <p>
                Se você já tem uma parceria de fabricação e está passando
                por dificuldades com qualidade, entrega e capacidade de 
                escala, vem pra Kapsula que podemos entregar 
                excelência na sua operação.
              </p>
              <a href="#0" className='moreButton'>
                  Saiba Mais
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#030D45"/></svg>
              </a>
        </div>
        <div className="col-lg-7 text-right">
          <img style={{maxWidth: "510px"}} className="rounded"
            src="https://via.placeholder.com/440x510"
            alt=""
          />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosistema