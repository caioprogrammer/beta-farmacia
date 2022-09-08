import React from 'react'

const Lider = () => {
  return (
    <section className="lider py-4">
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
    </section>
  )
}

export default Lider