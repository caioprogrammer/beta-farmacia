import React from 'react';
import { Banner } from './index';

const Fabricacao = () => {
  return (
    <section>
      <Banner name="Fabricação" subtitle="Subtitulo de Fabricacao" />
      <div className="fabricacao">
        <div className="container position-relative">
          <div className="fabricacao-content py-5">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-lg-6 col-md-12">
                  <h2>
                  Traga seu produto para quem é Líder de mercado!
                  </h2>
                  <p>
                  Neste serviço você pode contratar a nossa empresa para fabricar os seus produtos, como nutracêuticos, cosméticos, chás, suplementos ou solúveis. Utilizamos a melhor matéria-prima do mercado para que tudo seja fabricado com qualidade e aprovado pela ANVISA.
                  </p>
                  <p>
                  Com um time de profissionais qualificados e com nossa tecnologia de ponta, a fabricação é feita com segurança, cuidado, qualidade e sempre dentro do prazo. Proporcionando satisfação completa para o seu cliente.
                  </p>
                  <p>
                  Lembrando que esse serviço não está ligado ao serviço de logística: você pode contratá-lo separadamente.
                  </p>
                  <a style={{maxWidth: "360px", textAlign: "center"}}className="nav-link link-parceiro" href="/contact">Quero ser parceiro</a>
                </div>
                <div className="col-lg-6 py-3 py-lg-auto col-md-12 text-md-center">
                  <div>
                    <img className="mw-100" alt="slider" src="https://via.placeholder.com/535x400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <li className="nav-item">
              <a
                className="nav-link" id="pills-profile-tab"
                data-toggle="pill" href="#pills-cosmeticos"
                role="tab" aria-controls="pills-cosmeticos" aria-selected="false">
                Cosméticos
              </a>
            </li>
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

              </div>
            </div>
            <div className="tab-pane fade my-5 align-items-start" id="pills-cosmeticos" role="tabpanel" aria-labelledby="pills-profile-tab">
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
              </div>
            </div>
          </div>
        </div>
        <div style={{background: "#e6e9f3"}} className="bg-new py-5">
          <div className='container position-relative'>
          <h2 className='text-center'>O nosso processo de fabricação</h2>
          <p className='text-center'>Confira como é fácil tirar a sua ideia do papel!</p>
          <div className="processo__grid mb-4">
            <div className="grid__item p-4">
              <div className="number">1</div>
              <h3>Escolha do produto</h3>
              <p>
              Escolher o produto ideal faz toda a diferença. 
              Nosso time entende com precisão a sua necessidade 
              e ajuda a escolher o melhor para você.
              </p>
            </div>
            <div className="grid__item p-4">
              <div className="number">2</div>
              <h3>Escolha do produto</h3>
              <p>
              Escolher o produto ideal faz toda a diferença. 
              Nosso time entende com precisão a sua necessidade 
              e ajuda a escolher o melhor para você.
              </p>
            </div>
            <div className="grid__item p-4">
              <div className="number">3</div>
              <h3>Escolha do produto</h3>
              <p>
              Escolher o produto ideal faz toda a diferença. 
              Nosso time entende com precisão a sua necessidade 
              e ajuda a escolher o melhor para você.
              </p>
            </div>
            <div className="grid__item p-4">
              <div className="number">4</div>
              <h3>Escolha do produto</h3>
              <p>
              Escolher o produto ideal faz toda a diferença. 
              Nosso time entende com precisão a sua necessidade 
              e ajuda a escolher o melhor para você.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container py-5">
          <h2 className="text-center font-weight-bold mb-5">A Empresa é feita para você que:</h2>
          <div className="gridFeita">
            <div className='feita__item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M42.5 42.5a6.25 6.25 0 0 0-6.25-6.25h-12.5a6.25 6.25 0 0 0-6.25 6.25" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="30" cy="23.75" r="6.25" stroke="#F7155E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 42.5v-6.25" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="7.5" y="7.5" width="45" height="45" rx="5" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>
              É proprietário de empresa e deseja desenvolver os seus próprios produtos.
              </p>
            </div>
            <div className='feita__item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M47.553 30.113v-17.5c0-2.763-2.238-5-5-5h-30c-2.763 0-5 2.237-5 5v30c0 2.762 2.237 5 5 5h17.5" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="m51.63 48.155-3.535 3.535a2.497 2.497 0 0 1-3.535 0L25.732 32.863A2.493 2.493 0 0 1 25 31.095V25.06h6.035c.663 0 1.3.263 1.768.733L51.63 44.62a2.497 2.497 0 0 1 0 3.535v0Z" stroke="#F7155E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="m47.15 40.15-7.075 7.05" stroke="#F7155E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>
                Está preparado para tirar a sua ideia do papel.
              </p>
            </div>
            <div className='feita__item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="m35 42.5 1.25 10M25 42.5l-1.25 10" stroke="#F7155E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="M46.072 42.5H13.927A6.427 6.427 0 0 1 7.5 36.072V13.927A6.427 6.427 0 0 1 13.928 7.5H46.07a6.428 6.428 0 0 1 6.43 6.428V36.07a6.428 6.428 0 0 1-6.428 6.43Z" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.35 52.5h19.3" stroke="#F7155E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 17.5V15m0 17.5V35m-4.34-4.285c.648 1.06 1.753 1.795 3.09 1.795h2.74a3.51 3.51 0 0 0 .853-6.915l-4.688-1.175A3.52 3.52 0 0 1 25 21.01a3.511 3.511 0 0 1 3.51-3.51h2.74c1.333 0 2.435.73 3.085 1.785" stroke="#25DC8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>
              Quer trabalhar com o segmento que mais cresce no mundo: o digital.
              </p>
            </div>
          </div>
        </div>
        <section style={{background: "#e6e9f3"}}>
          <div className="container py-5">
            <div className='content flex-column-reverse flex-lg-row d-flex align-items-center justify-content-between'>
              <div className='image my-2 mr-0 mr-lg-5'>
                <img src="https://via.placeholder.com/360x150" alt="ok" />
              </div>
              <div style={{maxWidth: "60%"}} className='mw-auto logistica'>
                <h2>Lidamos com a sua logística</h2>
                <p style={{
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "32px",
              color: "#626262"}} >
                Nosso time está preparado para lidar com a 
                logística de qualquer produto. 
                Nossa central de distribuição conta com 1.200m² 
                para armazenamento seguro dos seus produtos 
                e entrega precisa ao cliente final. 
                Isso tudo sem você se preocupar com nenhum processo.
                </p>
                <a href="#0" className='moreButton'>
                  Saiba Mais
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#030D45"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green">
          <div className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className='anvisa col-md-6'>
              <h2>Produtos aprovados pela ANVISA</h2>
              <p>
              Nossa equipe cuida de toda regularização dos 
              seus produtos para que eles sejam fabricados 
              de acordo com as normas da ANVISA.
              </p>
            </div>
            <div className='image d-none d-md-flex col-auto'>
              <img style={{marginTop: "-25px"}} src="https://via.placeholder.com/355x400" alt="ooo" />
            </div>
          </div>
        </section>
        <section>
          <div style={{gap: "4rem"}} className="container py-5 d-flex flex-lg-row flex-column align-items-center justify-content-between">
            <div className="image">
              <img src="https://via.placeholder.com/600x400" alt="video" />
            </div>
            <div style={{width: "60%", maxWidth: "565px"}} className='w-100 fiscal'>
              <h2>Incentivo Fiscal</h2>
              <p>
              Focados no sucesso do seu negócio, 
              temos a opção de inclusão da sua empresa no nosso 
              sistema de incentivo fiscal único com redução de impostos, 
              facilitando a gestão financeira da sua empresa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Fabricacao