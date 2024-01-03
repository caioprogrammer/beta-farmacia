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
        <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20LotNutrition%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" className='redirectButton'>
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