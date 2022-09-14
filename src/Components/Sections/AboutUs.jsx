import React from 'react'

const AboutUs = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img style={{maxWidth: "530px"}} className="rounded"
              src="https://via.placeholder.com/530x470"
              alt=""
            />
          </div>
          <div className="col-lg-5">
              <h2>Sobre nós</h2>
              <p>
                Com mais de 25 anos de experiência como empreendedor e
                 passando por todas as dificuldades em ter seu próprio negócio, 
                 a Família Tulio percebeu a necessidade e oportunidade em ajudar 
                 empreendedores a realizar o sonho em ter seu próprio negócio 
                 no segmento de nutracêuticos.
              </p>
              <p>
                A empresa Italabs, localizada na cidade de Itaporanga-SP, 
                vem para facilitar você empreendedor a criar sua marca com segurança, 
                desenvolver seus produtos dentro das legislações pertinentes e 
                permitir iniciar seu negócio com baixo investimento além 
                de apresentar soluções para te ajudar a vender.
              </p>
              <a href="#0" className='moreButton'>
                  Saiba Mais
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#030D45"/></svg>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs