import React from 'react'
import { Parceiro } from '../../assets'

const Parcerias = (props) => {
  return (
    <section className="bg-green mt-5">
    <div data-aos={props.effect} className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className='anvisa col-md-6'>
        <h2>Parcerias de sucesso</h2>
        <p>
        Acreditamos que não se faz nada grande sozinho, 
        por isso, buscamos sempre parceiros que estejam 
        alinhados a nossos princípios e valores, 
        para assim, proporcionarmos aos nossos clientes 
        uma melhor experiência e um serviço de excelência.
        </p>
      </div>
      <div className='image d-none d-md-flex col-auto'>
        <img style={{marginTop: "-25px", maxWidth: "760px"}} src={Parceiro} alt="Parceria de Sucesso, imagem com duas pessoas se cumprimentando!" />
      </div>
    </div>
</section>
  )
}

export default Parcerias