import React from 'react';
import { porque } from '../contents';

const Porque = (props) => {
  return (
    <section className='porque'>
      <div data-aos={props.effect} className="container py-5">
      <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <h2>Por que escolher a Lot Nutrition?</h2>
            <p>
            A Lot Nutrition oferece diversas soluções e estratégicas 
            para seus parceiros, sempre com o intuito de fazer mais e melhor. 
            Um time multiprofissional formado por Farmacêuticos, 
            Nutricionistas e Engenheiros irão te auxiliar 
            no caminho rumo ao sucesso.
            </p>
            <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20LotNutrition%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" className='redirectButton'>
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