import React from 'react';
import { porque } from '../contents';

const Porque = () => {
  return (
    <section className='porque'>
      <div className="container py-5">
      <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <h2>Por que escolher a Empresa?</h2>
            <p>
            A Kapsula oferece diversos serviços 
            exclusivos para seus parceiros, sempre 
            com o intuito de fazer mais e melhor.
            Um super time, composto por grandes 
            profissionais do mercado, que te 
            auxiliarão no caminho rumo ao sucesso!
            </p>
            <a data-toggle="modal" data-target="#exampleModalCenter" href="#0" className='redirectButton'>
              Quero ser parceiro
            </a>
          </div>
          <div className="col-lg-6 col-md-12 razao-grid">
            {porque.map((razao, index) => (
              <div className='razao-item' key={index}>
                <span>
                  <img style={{width: "60px"}} src={razao.img} alt="" />
                </span>
                <p>{razao.motivo}</p>
                <span>{razao.texto}</span>
              </div>
            ))}
          </div>
      </div>
      </div>
    </section>
  )
}

export default Porque