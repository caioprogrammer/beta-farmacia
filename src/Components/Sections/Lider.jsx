import React from 'react'

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
            <a href="#0" className='redirectButton'>
              Quero ser parceiro
            </a>
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