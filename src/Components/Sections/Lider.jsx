import React from 'react'
import { Fabricacao1 } from '../../assets'

const Lider = (props) => {
  return (
    <section className="lider py-4">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <h2>
              {props.title}
            </h2>
            <p>
              {props.subtitle}
            </p>
            <p>
              {props.text}
            </p>
            <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20Italabs%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" className='redirectButton'>
              Quero ser parceiro
            </a>
          </div>
          <div className="col-lg-6 py-3 py-lg-auto col-md-12 text-md-center">
            <div>
              <img className="mw-100 rounded" alt="slider" src={Fabricacao1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lider