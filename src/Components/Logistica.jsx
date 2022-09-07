import React from 'react';
import { Banner } from './index';

const Logistica = () => {
  return (
    <section>
      <Banner name="Logística" 
      subtitle=
      "Através de uma logística desenvolvida com as melhores estratégias, cuidamos de toda parte d armazenamento e entrega dos seus produtos." />
      <div className="logistica">
        <div className="container position-relative">
          <div className="logistica-content py-5">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-lg-6 col-md-12">
                  <h2>
                    Nós levamos o seu produto até o seu cliente.
                  </h2>
                  <p>
                    Com um centro de distribuição 
                    localizado em Governador Valadares (MG),
                    oferecemos uma infraestrutura de qualidade
                    para estocar os seus itens. Assim, 
                    você não precisa se preocupar com o 
                    gerenciamento de estoque.
                  </p>
                  <p>
                  Contamos também com soluções inteligentes
                   para que o transporte seja realizado com 
                   precisão e rapidez em todo território nacional. 
                   Nosso time é composto por pessoas qualificadas 
                   para que todo o processo seja otimizado e 
                   feito de maneira eficiente.
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
        <div style={{background: "#e6e9f3"}} className="bg-new py-5">
          <div className='container'>
          <h2 className='text-center'>Logística FULFILLMENT</h2>
          <p className='text-center'>
          Somos pioneiros na logística fulfillment
          </p>
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

        <div style={{background: "#e6e9f3"}} className="bg-new py-5">
          <div className='container'>
          <h2 className='text-center'>Logística FULFILLMENT</h2>
          <p className='text-center'>
          Somos pioneiros na logística fulfillment
          </p>
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
        <section className='bg-green'>
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
      </div>
    </section>
  )
}

export default Logistica