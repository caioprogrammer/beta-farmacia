import React from 'react'
import { Principal4 } from '../../assets'

const Nutraceuticos = (props) => {
  return (
    <section className="nutraceuticos py-4">
      <div data-aos={props.effect} className="container">
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
                  <img className='mw-100' src={Principal4} alt="placeholder" />
                </div>
                <div className="tab-pane__content col-lg-8">
                  <h2>Nutracêuticos</h2>
                  <p>
                    Os nutracêuticos são suplementos alimentares que trazem inúmeros benefícios para o organismo. 
                    Requer uma fabricação especializada e controles de qualidade rigorosos. 
                    Utilizamos das melhores tecnologias e profissionais 
                    altamente qualificados para realizar todos os processos, 
                    desde a criação da marca, desenvolvimento das fórmulas, produção e entrega.
                  </p>
                  <div className='tab-pane__benefits'>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Antioxidantes
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Energia
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Imunidade
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Gerenciamento de peso
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Stress/Sono
                    </span>
                    <span style={{flex: "1 0 auto"}} className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Fortalecimento dos ossos e articulações
                    </span>
                    <span className="item__benefits d-flex align-items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                      Cabelo, Pele e Unha
                    </span>
                  </div>
                  <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20LotNutrition%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" className='redirectButton'>
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
                  <a data-toggle="modal" data-target="#exampleModalCenter" href="#0" className='redirectButton'>
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