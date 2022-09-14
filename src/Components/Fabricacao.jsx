import React from 'react';
import { Banner } from './index';
import { Processo, Nutraceuticos, EmpresaGrid, Anvisa, Lider } from './Sections/sections';
const Fabricacao = () => {
  return (
    <section>
      <Banner name="Fabricação" />
      <div className="fabricacao">
        <div className="container position-relative">
          <Lider
          title="Traga seu produto para a Italabs Nutracêuticos"
          subtitle="Neste serviço você pode contratar a nossa empresa para fabricar os seus produtos nutracêuticos. Utilizamos a melhor matéria-prima do mercado para que tudo seja fabricado com qualidade e aprovado pela ANVISA."
          text="Com um time de profissionais qualificados e com nossa tecnologia de ponta, a fabricação é feita com segurança, cuidado, qualidade e sempre dentro do prazo. Proporcionando satisfação completa para o seu cliente."
          />
        </div>
        
        <Nutraceuticos />
        
        <Processo />

        <EmpresaGrid />
        
        <Anvisa />
        
      </div>
    </section>
  )
}

export default Fabricacao