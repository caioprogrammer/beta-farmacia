import React from "react";
import { BannerHome } from './index';
import { Ecosistema, Lider, Nutraceuticos, AboutUs } from './Sections/sections'

function Home() {
  const homeName = "A melhor opção pra você que quer criar sua marca própria ou precisa de uma solução logística eficiente.";
  const homeSubtitle = "Fabricamos nutracêuticos, cosméticos, chás e solúveis com a sua marca. Cuidamos também de toda a logística, independente de qual segmento seja o seu negócio."
  return (
  <main>
    <BannerHome name={homeName} subtitle={homeSubtitle} />
    <AboutUs />
    
    <Ecosistema />

    <Lider />

    <Nutraceuticos />

    <section className="processo py-4">
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
    </section>


    <section className="empresa py-4">
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


    <Ecosistema />


    <Lider />


    <section className="bg-green">
          <div className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className='anvisa col-md-6'>
              <h2>Parcerias de sucesso</h2>
              <p>
              Acreditamos que não se faz nada grande sozinho, 
              por isso, buscamos sempre parceiros que estejam 
              alinhados a nossos princípios e valores, 
              para assim, proporcionarmos aos nossos clientes 
              uma melhor experiência e um serviço de excelência.
              </p>
            </div>
            <div className='image d-none d-md-flex col-auto'>
              <img style={{marginTop: "-25px"}} src="https://via.placeholder.com/355x400" alt="ooo" />
            </div>
          </div>
    </section>


    <section className="processo py-4">
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


    <section className='has-bg mt-4 position-relative' style={{padding: "4rem 1rem"}}>
          <div className="container">
            <div className='localizacao'>
              <h2>Localização estratégica</h2>
              <p>
                O nosso centro de distribuição está 
                localizado em Governador Valadares (MG), 
                está situado no Vale do Rio Doce a cerca de 
                320 km a leste da capital do estado. Todavia, 
                possuímos parceiros estratégicos para 
                ampliar a nossa rede de cobertura e 
                realizarmos um envio rápido para todo o Brasil.
              </p>
            </div>
          </div>
    </section>


    <section className='bg-green mt-4'>
          <div className="container align-items-center d-block d-md-flex">
            <img className='mr-0 mr-lg-5' src="https://via.placeholder.com/620x400" alt="atendimento" />
            <div className='sac-section'>
              <h2>SAC Completo</h2>
              <p>
                Com o CareFee Kapsula, seu produto possui 
                suporte ao seu cliente final, sem custo adicional. 
                Atendimento personalizado para tirar dúvidas, 
                obter informações e resolver o que precisar.
              </p>
            </div>
          </div>
    </section>


    <section className="carefree py-4">
      <div className="container py-5">
          <h2 className="text-center font-weight-bold mb-5">CareFee Empresa</h2>
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
    </section>


  </main>  
  );
}

export default Home;