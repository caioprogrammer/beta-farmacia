import React from 'react';
import { porque } from '../contents';

const Porque = () => {
  return (
    <section className='porque'>
      <div className="container py-5">
      <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <h2>Por que escolher a Italabs?</h2>
            <p>
            A Italabs oferece diversas soluções e estratégicas 
            para seus parceiros, sempre com o intuito de fazer mais e melhor. 
            Um time multiprofissional formado por Farmacêuticos, 
            Nutricionistas e Engenheiros irão te auxiliar 
            no caminho rumo ao sucesso.
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