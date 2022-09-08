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
              Há mais de 15 anos, nosso fundador tinha o sonho de 
              atingir sua independência financeira e 
              viver exclusivamente da Internet.
              </p>
              <p>
              Após falir três vezes e ter pensado até mesmo em 
              tirar a própria vida, conseguiu finalmente adquirir conhecimento 
              e desenvolver ferramentas e soluções inovadoras que 
              possibilitaram a realização desse sonho, transformando 
              a sua vida e de toda sua família.
              </p>
              <p>
              Hoje, tem por missão facilitar a jornada de 
              outros sonhadores que também desejam mudar sua 
              história e alcançar a independência financeira 
              de toda sua família.
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