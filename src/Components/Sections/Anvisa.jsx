import React from 'react'
import { Principal4 } from '../../assets'

const Anvisa = (props) => {
  return (
    <section className="bg-green">
    <div data-aos={props.effect} className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className='anvisa col-md-6'>
        <h2>Produtos aprovados pela ANVISA</h2>
        <p>
          Nossa equipe cuida de toda regularização dos 
          seus produtos para que eles sejam fabricados 
          de acordo com as normas da ANVISA.
        </p>
        <a href="/contato" className='redirectButton'>
          Quero ser parceiro
        </a>
      </div>
      <div className='image d-none d-md-flex col-auto'>
        <img style={{marginTop: "-25px", maxWidth: "760px"}} src={Principal4} alt="" />
      </div>
    </div>
  </section>
  )
}

export default Anvisa