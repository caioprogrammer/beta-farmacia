import React from 'react'

const Parcerias = () => {
  return (
    <section className="bg-green">
    <div className="container py-5 py-lg-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
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
        <img style={{marginTop: "-25px"}} src="https://via.placeholder.com/355x400" alt="ooo" />
      </div>
    </div>
</section>
  )
}

export default Parcerias