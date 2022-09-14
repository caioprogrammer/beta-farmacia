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
            <a data-toggle="modal" data-target="#exampleModalCenter" href="#0" className='redirectButton'>
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