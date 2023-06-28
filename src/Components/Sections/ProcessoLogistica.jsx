import React from 'react';
import { processosLog } from "../contents";

const ProcessosLog = () => {
  return (
    <section className="processo py-4">
    <div style={{background: "#e6e9f3"}} className="bg-new py-5">
          <div className='container position-relative'>
          <h2 className='text-center'>O nosso processo de logistica</h2>
          <p className='text-center'>
          Confira como é o processo que o seu produto leva até chegar na casa do seu cliente.
          </p>
          <div className="processo__grid mb-4">
            {processosLog.map((processo, index) => (
              <div key={processo.id} className="grid__item p-4">
                <div className="number">{processo.number}</div>
                <h3>{processo.choice}</h3>
                <p>{processo.text}</p>
              </div>
            ))}
            
          </div>
          <div className="d-flex align-items-center justify-content-center">
              <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20Italabs%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" className='redirectButton'>
                Quero ser parceiro
              </a>  
            </div>
        </div>
    </div>
  </section>

  )
}

export default ProcessosLog