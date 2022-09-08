import React from 'react'

const Anvisa = () => {
  return (
    <section className="bg-green">
    <div className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className='anvisa col-md-6'>
        <h2>Produtos aprovados pela ANVISA</h2>
        <p>
          Nossa equipe cuida de toda regularização dos 
          seus produtos para que eles sejam fabricados 
          de acordo com as normas da ANVISA.
        </p>
        <a href="#0" className='redirectButton'>
          Quero ser parceiro
        </a>
      </div>
      <div className='image d-none d-md-flex col-auto'>
        <img style={{marginTop: "-25px"}} src="https://via.placeholder.com/355x400" alt="ooo" />
      </div>
    </div>
  </section>
  )
}

export default Anvisa