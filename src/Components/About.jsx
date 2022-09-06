import React from "react";

import { Banner, Slider } from "./index";


function About() {
  const title = "Sobre Nós"
  const subtitle = "Somos pioneira, e temos valores fortes que nos fazem ser sempre a melhor!";
  return (
  <section>
    <Banner 
    name={title}
    subtitle={subtitle}
    />
    <div className="about py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <h2>A Empresa</h2>
            <p>A Empresa nasceu com o objetivo de ajudar outras pessoas a conquistarem sua independência financeira através da internet.</p>
            <p>
            A partir de sua experiência, Kaisser percebeu que ali surgia um modelo pioneiro de negócio e resolveu oferecer aos seus parceiros um serviço completo que ia desde a criação do produto até a entrega ao cliente final.
            </p>
            <p>
            A Kapsula, se firmava, então, como a primeira empresa Full E-Commerce especializada em encapsulados e logística. A empresa começa a crescer em proporções exponenciais e logo chama a atenção de todo o país.    
            </p>
            <p>
            Nos últimos anos, a Kapsula expandiu tanto a sua estrutura, quanto os seus serviços.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-md-center">
              {/* <div>
                <img className="mw-100" alt="slider" src="https://via.placeholder.com/535x400" />
              </div> */}
              <Slider />
          </div>
        </div>
        <div className="d-flex align-items-center my-5 justify-content-between flex-md-row flex-column">
          <div className="about__item d-flex flex-md-column align-items-md-center text-md-center">
          <svg className="w-100" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M30.002 5.992H19.654c-1.06 0-2.079.423-2.83 1.173l-.827.828" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="M29.002 17.997H18.998v-4.001a2 2 0 0 1 2-2.001h6.003a2 2 0 0 1 2.001 2v4.002Zm-.428 0h-9.148a7.432 7.432 0 0 0-7.43 7.432v14.578a4 4 0 0 0 4 4.001h16.008a4 4 0 0 0 4.001-4.001V25.429a7.432 7.432 0 0 0-7.431-7.431Z" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 5.992v6.003" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p>
            Reconhecida em todo o território nacional como referência no sistema full e-commerce.
            </p>
          </div>
          <div className="about__item d-flex flex-md-column align-items-md-center text-md-center">
          <svg className="w-100" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M14 30h20m-20 6h20m-20 6h20m0 0V24H14v18m6-24h8" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="M42 16 24 6 6 16v26h36V16Z" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p>
            Possui centro de distribuição para o processo de logística fulfillment.
            </p>
          </div>
          <div className="about__item d-flex flex-md-column align-items-md-center text-md-center">
          <svg className="w-100" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path clipRule="evenodd" d="m6.99 26.93 2.39 3.128.516 3.894A4.823 4.823 0 0 0 14.04 38.1l3.904.522 3.126 2.388a4.822 4.822 0 0 0 5.858 0l3.128-2.39h-.004l3.896-.516a4.823 4.823 0 0 0 4.148-4.144l.52-3.904c0 .002 1.208-1.58 2.39-3.126a4.825 4.825 0 0 0 0-5.858l-2.386-3.13-.516-3.894A4.823 4.823 0 0 0 33.96 9.9l-3.906-.52-3.126-2.388a4.822 4.822 0 0 0-5.858 0L17.942 9.38h.004l-3.896.518a4.823 4.823 0 0 0-4.148 4.144l-.522 3.904c0-.002-1.208 1.58-2.39 3.126a4.828 4.828 0 0 0 0 5.858v0Z" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m29.606 21.204-7.002 7.002-4.206-4.202" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p>
            Atua no segmento de nutracêuticos, cosméticos, solúveis, suplementos e chás.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="about__bottom py-5">
      <div className="container">
        <h2 className="text-center">Os valores que nós vivemos</h2>
        <div className="about__bottom cards flex-wrap justify-content-center flex-lg-nowrap justify-content-md-center">
          <div className="about__bottom card">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><circle cx="37.5" cy="37.5" r="37.5" fill="url(#a)"/><path d="M39.88 36.12 25.74 50.26m1.526-10.262-6.926-1.636a1 1 0 0 1-.478-1.68l5.508-5.508a2 2 0 0 1 1.398-.586l6.21-.054" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="m53.758 31.95 1.616-7.776c.44-2.116-1.432-3.988-3.548-3.548l-7.776 1.616c-2.29.476-4.39 1.61-6.042 3.264l-6.38 6.378a16.012 16.012 0 0 0-4.518 8.996l-.022.146a6.962 6.962 0 0 0 1.964 5.922v0a6.952 6.952 0 0 0 5.922 1.962l.146-.022a16 16 0 0 0 8.996-4.518l6.378-6.378a11.985 11.985 0 0 0 3.264-6.042v0Z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40.8 23.428A44.83 44.83 0 0 1 52.572 35.2M36 48.734l1.636 6.926a1 1 0 0 0 1.68.478l5.508-5.508a2 2 0 0 0 .586-1.398l.054-6.21" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="a" x1="37.5" y1="0" x2="37.5" y2="75" gradientUnits="userSpaceOnUse"><stop stopColor="#23AF70"/><stop offset="1" stopColor="#25DC8C"/></linearGradient></defs></svg>
            <h4>Missão</h4>
            <p>
            Criar e fornecer produtos, ferramentas e 
            soluções de excelência que ajudem nossos clientes 
            a obter sua independência financeira 
            por meio da Internet.
            </p>
          </div>
          <div className="about__bottom card">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><circle cx="37.5" cy="37.5" r="37.5" fill="url(#a)"/><path d="M39.88 36.12 25.74 50.26m1.526-10.262-6.926-1.636a1 1 0 0 1-.478-1.68l5.508-5.508a2 2 0 0 1 1.398-.586l6.21-.054" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="m53.758 31.95 1.616-7.776c.44-2.116-1.432-3.988-3.548-3.548l-7.776 1.616c-2.29.476-4.39 1.61-6.042 3.264l-6.38 6.378a16.012 16.012 0 0 0-4.518 8.996l-.022.146a6.962 6.962 0 0 0 1.964 5.922v0a6.952 6.952 0 0 0 5.922 1.962l.146-.022a16 16 0 0 0 8.996-4.518l6.378-6.378a11.985 11.985 0 0 0 3.264-6.042v0Z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40.8 23.428A44.83 44.83 0 0 1 52.572 35.2M36 48.734l1.636 6.926a1 1 0 0 0 1.68.478l5.508-5.508a2 2 0 0 0 .586-1.398l.054-6.21" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="a" x1="37.5" y1="0" x2="37.5" y2="75" gradientUnits="userSpaceOnUse"><stop stopColor="#23AF70"/><stop offset="1" stopColor="#25DC8C"/></linearGradient></defs></svg>
            <h4>Visão</h4>
            <p>
            Ser reconhecida pelo mercado como a melhor
             solução para quem deseja atingir independência
              financeira por meio da Internet.
            </p>
          </div>
          <div className="about__bottom card">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><circle cx="37.5" cy="37.5" r="37.5" fill="url(#a)"/><path d="M39.88 36.12 25.74 50.26m1.526-10.262-6.926-1.636a1 1 0 0 1-.478-1.68l5.508-5.508a2 2 0 0 1 1.398-.586l6.21-.054" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path clipRule="evenodd" d="m53.758 31.95 1.616-7.776c.44-2.116-1.432-3.988-3.548-3.548l-7.776 1.616c-2.29.476-4.39 1.61-6.042 3.264l-6.38 6.378a16.012 16.012 0 0 0-4.518 8.996l-.022.146a6.962 6.962 0 0 0 1.964 5.922v0a6.952 6.952 0 0 0 5.922 1.962l.146-.022a16 16 0 0 0 8.996-4.518l6.378-6.378a11.985 11.985 0 0 0 3.264-6.042v0Z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40.8 23.428A44.83 44.83 0 0 1 52.572 35.2M36 48.734l1.636 6.926a1 1 0 0 0 1.68.478l5.508-5.508a2 2 0 0 0 .586-1.398l.054-6.21" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="a" x1="37.5" y1="0" x2="37.5" y2="75" gradientUnits="userSpaceOnUse"><stop stopColor="#23AF70"/><stop offset="1" stopColor="#25DC8C"/></linearGradient></defs></svg>
            <h4>Valores</h4>
            <p>
            Amor ao próximo, ética, excelência,
             paixão, transparência, humildade e verdade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;