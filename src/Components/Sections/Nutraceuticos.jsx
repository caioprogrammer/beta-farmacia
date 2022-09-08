import React from 'react'

const Nutraceuticos = () => {
  return (
    <section className="nutraceuticos py-4">
      <div className="container">
            <ul className="nav nav-pills mb-3 justify-content-between" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-nutra"
                  role="tab"
                  aria-controls="pills-nutra"
                  aria-selected="true">
                  Nutracêuticos
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link" id="pills-profile-tab"
                  data-toggle="pill" href="#pills-cosmeticos"
                  role="tab" aria-controls="pills-cosmeticos" aria-selected="false">
                  Cosméticos
                </a>
              </li> */}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active my-5 align-items-start" id="pills-nutra" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className='tab-pane__img mr-lg-5 col-lg-4'>
                  <img className='mw-100' src="https://via.placeholder.com/400x336" alt="placeholder" />
                </div>
                <div className="tab-pane__content col-lg-8">
                  <h2>Nutracêuticos1</h2>
                  <p>
                    Os nutracêuticos são suplementos alimentares que trazem
                    inúmeros benefícios para o organismo.
                    Requer uma fabricação rigorosa e com muitos cuidados.
                    Utilizamos das melhores tecnologias e profissionais altamente
                    capacitados para fabricar o seu produto com a melhor
                    qualidade do mercado. Selecione a linha desejada e confira
                    quais produtos você pode ter:
                  </p>
                  <div className='tab-pane__benefits'>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                  </div>
                  <a href="#0" className='redirectButton'>
                    Quero ser parceiro
                  </a>
                </div>
              </div>
              {/* <div className="tab-pane fade my-5 align-items-start" id="pills-cosmeticos" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className='tab-pane__img mr-lg-5 col-lg-4'>
                  <img className='mw-100' src="https://via.placeholder.com/400x336" alt="placeholder" />
                </div>
                <div className="tab-pane__content col-lg-8">
                  <h2>Cosméticos</h2>
                  <p>
                    Implantamos os ajustes necessários e fabricamos o
                    produto de forma fiel à sua fórmula e com a identidade da sua marca.
                    Com matéria prima de qualidade e com processos fielmente
                    testados e aprovados, você não precisará se preocupar com
                    o resultado final da fabricação. Selecione a linha desejada
                    e confira quais cosméticos nós fabricamos:
                  </p>
                  <div className='tab-pane__benefits'>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidante
                    </span>
                  </div>
                  <a href="#0" className='redirectButton'>
                    Quero ser parceiro
                  </a>  
                </div>
              </div> */}
            </div>
      </div>
    </section>
  )
}

export default Nutraceuticos