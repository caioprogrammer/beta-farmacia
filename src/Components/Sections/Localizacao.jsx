import React from 'react'

const Localizacao = (props) => {
  return (
    <section className='localiza has-bg mt-4 position-relative' style={{padding: "4rem 1rem", background: "#e6e9f3"}}>
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
  )
}

export default Localizacao