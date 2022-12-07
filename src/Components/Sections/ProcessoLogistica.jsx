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
              <a href="/contato" className='redirectButton'>
                Quero ser parceiro
              </a>  
            </div>
        </div>
    </div>
  </section>

  )
}

export default ProcessosLog