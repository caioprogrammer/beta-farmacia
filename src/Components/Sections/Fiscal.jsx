import React from 'react'

const Fiscal = () => {
  return (
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
  )
}

export default Fiscal